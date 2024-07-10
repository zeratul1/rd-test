import {
  createMessage,
  decrypt,
  decryptKey,
  encrypt,
  PrivateKey,
  PublicKey,
  readKey,
  readMessage,
  readPrivateKey,
} from 'openpgp';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { LRUCache } from 'lru-cache';
import axios, { AxiosResponse } from 'axios';
import { v4 } from 'uuid';
import { ApiReq, ApiResp } from './api';

class Profile {
  private readonly appId: string;
  private readonly clientFingerprint: string;
  private readonly serverFingerprint: string;
  private readonly privateKey: PrivateKey | null;
  private readonly publicKey: PublicKey | null;

  private constructor(appId: string, clientFingerprint: string, serverFingerprint: string, privateKey: PrivateKey | null, publicKey: PublicKey | null) {
    this.appId = appId;
    this.clientFingerprint = clientFingerprint;
    this.serverFingerprint = serverFingerprint;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  public static of(appId: string, clientFingerprint: string, serverFingerprint: string, privateKey?: PrivateKey, publicKey?: PublicKey): Profile {
    return new Profile(appId, clientFingerprint, serverFingerprint, privateKey || null, publicKey || null);
  }

  public copy(privateKey: PrivateKey, publicKey: PublicKey): Profile {
    return new Profile(this.appId, this.clientFingerprint, this.serverFingerprint, privateKey, publicKey);
  }

  public getAppId(): string {
    return this.appId;
  }

  public getClientFingerprint(): string {
    return this.clientFingerprint;
  }

  public getServerFingerprint(): string {
    return this.serverFingerprint;
  }

  public getPrivateKey(): PrivateKey | null {
    return this.privateKey;
  }

  public getPublicKey(): PublicKey | null {
    return this.publicKey;
  }

  public toString(): string {
    return `Profile{appId='${this.appId}', clientFingerprint='${this.clientFingerprint}', serverFingerprint='${this.serverFingerprint}'}`;
  }
}

const CA_PRIVATE_SECRET = new LRUCache<string, string>({ max: 1000 });

class Encoder {
  private PGP_KEY_PAIR: LRUCache<Profile, Profile>;

  private constructor(caFilePath: string) {
    //this.generateKeyPair('Chirs Zhou', 'chirs.zhou@rs.group', '').then(r => {});
    this.PGP_KEY_PAIR = new LRUCache<Profile, Profile>({
      max: 1000,
      // async method to use for cache.fetch(), for stale-while-revalidate type of behavior
      fetchMethod: async (profile, oldValue, { signal }) => {
        const privateKeyPath = path.join(caFilePath, profile.getAppId(), profile.getClientFingerprint(), 'private.key');
        const publicKeyPath = path.join(caFilePath, profile.getServerFingerprint(), 'public.key');

        const privateKeyPwd = CA_PRIVATE_SECRET.get(profile.getClientFingerprint()) || '';

        const privateKeyArmored = fs.readFileSync(privateKeyPath, { encoding: 'utf8' });
        const publicKeyArmored = fs.readFileSync(publicKeyPath, { encoding: 'utf8' });
        const publicKey = await readKey({ armoredKey: publicKeyArmored });
        const privateKey = await decryptKey({
          privateKey: await readPrivateKey({ armoredKey: privateKeyArmored }),
          passphrase: privateKeyPwd,
        });
        return profile.copy(privateKey, publicKey);
      },
    });
  }

  public static of(caFilePath: string): Encoder {
    return new Encoder(caFilePath);
  }

  static addSecret(clientFingerprint: string, privateKeyPwd: string) {
    CA_PRIVATE_SECRET.set(clientFingerprint, privateKeyPwd);
  }

  async loadKeyPair(profile: Profile): Promise<Profile | undefined> {
    return await this.PGP_KEY_PAIR.fetch(profile);
  }
}

async function Encrypt(privateKey: PrivateKey, publicKey: PublicKey, data: Uint8Array) {
  return await encrypt<Uint8Array>({
    message: await createMessage<Uint8Array>({ binary: data }), // input as Message object
    encryptionKeys: publicKey,
    signingKeys: privateKey,
    format: 'armored',
  });
}

async function Decrypt(privateKey: PrivateKey, publicKey: PublicKey, data: Uint8Array) {
  const decryptionResult = await decrypt({
    message: await readMessage({ armoredMessage: Buffer.from(data).toString('utf-8') }),
    verificationKeys: publicKey,
    decryptionKeys: privateKey,
    format: 'binary',
  });
  return decryptionResult.data;
}


const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36';

class Client {
  private readonly headers: Record<string, string>;

  constructor(appId: string) {
    this.headers = {
      'User-Agent': USER_AGENT,
      'Content-Encoding': 'utf-8',
      'x-rd-app-id': appId,
    };
  }

  public static of(appId: string): Client {
    return new Client(appId);
  }

  authorization(authorization: string): Client {
    this.headers['Authorization'] = authorization;
    return this;
  }

  requestId(): string {
    return v4().replace(/-/g, '');
  }

  async sendForm(url: string, params: Record<string, string>, data: Blob): Promise<string> {
    try {
      let response: AxiosResponse;
      if (params.hasOwnProperty('mediaFile')) {
        this.headers['Content-Type'] = 'multipart/form-data';
        const formData = new FormData();
        formData.append('mediaFile', data, params['mediaFile']);
        for (const key in params) {
          if (key != 'mediaFile') {
            formData.append(key, params[key]);
          }
        }
        response = await axios.post(url, formData, { headers: this.headers });
      } else {
        this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        response = await axios.post(url, params, { headers: this.headers });
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async sendProto(profile: Profile, url: string, requestData: Uint8Array): Promise<Uint8Array> {
    const encryptedData = await Encrypt(profile.getPrivateKey()!, profile.getPublicKey()!, requestData);
    // 创建 Buffer 实例并指定编码为 'utf8'
    const buffer = Buffer.from(encryptedData.toString(), 'utf8');
    const bytes = ApiReq.fromObject({
      reqId: this.requestId(),
      timestamp: Date.now().toString(),
      content: new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength),
      clientKeyId: profile.getClientFingerprint(),
      rdKeyId: profile.getServerFingerprint(),
    }).serializeBinary();
    try {
      this.headers['Content-Type'] = 'application/x-protobuf';
      const response = await axios.post(url, bytes.buffer, {
        headers: this.headers,
        responseType: 'arraybuffer',
      });
      if (response.status == 200) {
        const api = ApiResp.deserializeBinary(new Uint8Array(response.data));
        if (api.code == 1) {
          const decryptedData = await Decrypt(profile.getPrivateKey()!, profile.getPublicKey()!, api.body);
          return decryptedData as Uint8Array;
        }
      } else {
        console.info(`response headers:${response.headers}`);
      }
    } catch (error: any) {
      console.error(`Request sendProto exception: ${error.message}`);
    }
    return new Uint8Array();
  }
}

const accountCache = new LRUCache<string, string[]>({ max: 1000 });

class Authority {
  private authorizationCache: LRUCache<string, string>;

  private constructor(url: string) {
    this.authorizationCache = new LRUCache<string, string>({
      max: 1000,
      // how long to live in ms
      ttl: 1000 * 60 * 60,
      // async method to use for cache.fetch(), for stale-while-revalidate type of behavior
      fetchMethod: async (appId, oldValue, { signal }) => {
        const app = accountCache.get(appId);
        if (!app) {
          throw new Error(`This appId certificate is not found. Please use the 'Metadata.addAccount()' method to add it.`);
        }
        const response = await Client.of(appId).sendForm(url, {
          grant_type: 'client_credentials',
          client_id: app[0],
          client_secret: app[1],
        }, null);
        const data = new Map(Object.entries(response));
        if (data.get('error')) {
          throw new Error(data.get('error'));
        } else {
          return `${data.get('token_type')} ${data.get('access_token')}`;
        }
      },
    });
  }

  public static of(url: string): Authority {
    return new Authority(url);
  }

  public static addAuthority(appId: string, clientId: string, clientSecret: string): void {
    accountCache.set(appId, [clientId, clientSecret]);
  }

  public async authorization(appId: string): Promise<string | undefined> {
    try {
      return await this.authorizationCache.fetch(appId);
    } catch (error: any) {
      console.error(`Failed to retrieve authorization: ${error.message}`);
      throw new Error(`Failed to retrieve authorization: ${error.message}`);
    }
  }
}

export { Profile, Encoder, Encrypt, Decrypt, Client, Authority };