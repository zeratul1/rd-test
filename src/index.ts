import { ICallback, Profile, RDToolkit } from '@rd-wallet/toolkit';
import {
  CLIENT_ID,
  ACCESS_KEY,
  SECRET_KEY,
  CLIENT_KEY_ID,
  RD_KEY_ID,
  PRIVATE_KEY_PWD,
  ACCOUNT_ID,
  PGP_PATH,
} from './config';

console.log('yahaha');

const start = async () => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    console.log(profile);

    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    console.log(toolkit);

    const keyPair = await toolkit.keyPair();
    console.log('Key Pair: ', keyPair);

    const balance = await toolkit.openBalance(ACCOUNT_ID);
    console.log('has_data: ', balance.has_data);
    console.log('toObject(): ', balance.toObject());
    console.log('toArray(): ', balance.toArray());
    console.log('toString(): ', balance.toString());

    const account = await toolkit.accountDetail(ACCOUNT_ID);
    console.log('account detail: ', account);

    return balance;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const resp = await start();
  console.log('resp: ', resp);
})();
