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
  // const string = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAALRJREFUeNrsmMkKhUAMBLv//6dFXJ4bXh6kRtJ1GfGSUrIMkUII4T+8wEanJHyDjm86vun4VQZzHJsz8Cu4QXuBDj/AScJ3hfYCggXUS+BBJQLlN2G4CI4Cy3O1wOnj6TYACIhuhAInAXst1zgCWCPUXvXnOigV0KUVr+/LBB4yoUzAvxPdD+ieg7SB4C0Nu6UCt2TitnSqHsPDCexXMTUWECngAQS2oUQJCBa4nCGEjzIJMAAGagOccZvWAQAAAABJRU5ErkJggg==';
  // const resp = await start(string);
  // console.log('resp: ', resp);
  
  const input = process.argv.slice(2)[0];
  if (input) {
    const resp = await encrypt(input);
    process.stdout.write(resp);
  } else {
    process.stdout.write('');
  }
})();
