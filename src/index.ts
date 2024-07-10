import { ICallback, Profile, RDToolkit } from '@rd-wallet/toolkit'

console.log('yahaha')

console.log(Profile)

const fnTest = async () => {
  const profile = Profile.of('566625097465597952', '7d8ef878498fdb9b', '806e2a2496f2380a');
  const toolkit = RDToolkit.of('/data/websites/legendapi/envs/keys/RD/pgp', profile)
    .addAuthority('6a91e293db65f5487475430f5b4e1711', 'Cmp5zXfEg68sv3sDlizPCi8kjXSu2f1K')
    .addSecret('7d8ef878498fdb9b', '123456');

  const balance = await toolkit.openBalance('49465601');
  return balance;
}

(async () => {
  console.log(await fnTest())
})()