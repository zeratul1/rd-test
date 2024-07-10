import { ICallback, Profile, RDToolkit } from '@rd-wallet/toolkit'

console.log('yahaha')

console.log(Profile)

const CLIENT_ID = "566625097465597952";
const ACCESS_KEY = "6a91e293db65f5487475430f5b4e1711";
const SECRET_KEY = "Cmp5zXfEg68sv3sDlizPCi8kjXSu2f1K";
const CLIENT_KEY_ID = "7d8ef878498fdb9b";
const RD_KEY_ID = "806e2a2496f2380a";
const PRIVATE_KEY_PWD = "123456";
const ACCOUNT_ID = "49465601";

const PGP_PATH = "./keys/RD/pgp";

const fnTest = async () => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);

    const balance = await toolkit.openBalance(ACCOUNT_ID);
    return balance;
  } catch(err) {
    console.error(err)
  }
}

(async () => {
  const resp = await fnTest()
  console.log('resp: ', resp)
})()