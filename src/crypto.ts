import { ICallback, Profile, RDToolkit, Encrypt, Decrypt } from '@rd-wallet/toolkit';
import {
  CLIENT_ID,
  ACCESS_KEY,
  SECRET_KEY,
  CLIENT_KEY_ID,
  RD_KEY_ID,
  PRIVATE_KEY_PWD,
  PGP_PATH,
} from './config';

// console.log('yahaha');
// console.log(Encrypt);
// console.log(Decrypt);

const start = async (string = '') => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    console.log(profile);

    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    console.log(toolkit);

    const keyPair = await toolkit.keyPair();
    console.log('Key Pair: \n', keyPair);
    console.log('private key fingerprint: \n', keyPair?.getPrivateKey()?.getFingerprint());
    console.log('public key fingerprint: \n', keyPair?.getPublicKey()?.getFingerprint());

    const requestData = new Uint8Array(Buffer.from(string, 'base64'));
    console.log('request data: \n', requestData)
    
    const data = await Encrypt(keyPair?.getPrivateKey()!, keyPair?.getPublicKey()!, requestData)
    const buffer = Buffer.from(data.toString(), 'utf8');
    const binary = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    console.log('content binary: \n', binary);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const encrypt = async (string = '') => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    const keyPair = await toolkit.keyPair();

    const requestData = new Uint8Array(Buffer.from(string, 'base64'));
    const data = await Encrypt(keyPair?.getPrivateKey()!, keyPair?.getPublicKey()!, requestData)
    
    return data.toString();
  } catch (err) {
    process.stderr.write(err.message);
    return '';
  }
};

export const decrypt = async (string = '') => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    const keyPair = await toolkit.keyPair();

    const responseData = new Uint8Array(Buffer.from(string, 'base64'));
    const data = await Decrypt(keyPair?.getPrivateKey()!, keyPair?.getPublicKey()!, responseData);
    
    return Buffer.from((data as Uint8Array)).toString('base64');
  } catch (err) {
    process.stderr.write(err.message);
    return '';
  }
};
