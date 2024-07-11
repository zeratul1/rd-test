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

console.log('yahaha');
console.log(Encrypt);
console.log(Decrypt);

const start = async (string = '') => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    console.log(profile);

    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    console.log(toolkit);

    const keyPair = await toolkit.keyPair();
    console.log('Key Pair: ', keyPair);

    const requestData = new Uint8Array(Buffer.from(string, 'base64'))
    console.log('request data: ', requestData)
    
    const data = await Encrypt(keyPair?.getPrivateKey()!, keyPair?.getPublicKey()!, requestData)
    return data;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const string = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAALRJREFUeNrsmMkKhUAMBLv//6dFXJ4bXh6kRtJ1GfGSUrIMkUII4T+8wEanJHyDjm86vun4VQZzHJsz8Cu4QXuBDj/AScJ3hfYCggXUS+BBJQLlN2G4CI4Cy3O1wOnj6TYACIhuhAInAXst1zgCWCPUXvXnOigV0KUVr+/LBB4yoUzAvxPdD+ieg7SB4C0Nu6UCt2TitnSqHsPDCexXMTUWECngAQS2oUQJCBa4nCGEjzIJMAAGagOccZvWAQAAAABJRU5ErkJggg==';
  const resp = await start(string);
  console.log('resp: ', resp);
})();
