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

const encrypt = async (string = '') => {
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

(async () => {
  const input = process.argv.slice(2)[0];
  if (input) {
    const resp = await encrypt(input);
    process.stdout.write(resp);
  } else {
    process.stdout.write('');
  }
})();
