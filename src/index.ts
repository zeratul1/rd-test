import {
  performance,
  PerformanceObserver,
} from 'node:perf_hooks';
import { ICallback, Profile, RDToolkit, Decrypt, OpenBalanceResponse } from '@rd-wallet/toolkit';
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

// console.log('yahaha');

const respData = `-----BEGIN PGP MESSAGE-----
Version: BCPG v1.77.00

wcBMA/9ejEpRSZTXAQf/VuF47J3stvQ4DJOzcUsQavYiESc2gk2aZBruzNiL2PQV
Avr7Nep3fkOsGsky1hI0svQ6wpdbltKP1n+KsNEvHI8OGet6FoYRa9iXRW8E4q8K
oGPl7ujUQdPQTp4MEBvWiFwRlh1jWVhNluGfP7zer37OfPZRkoJ+XUpu+3wStbJ6
lleeDlE9U/2bUUQl7ENXGAlfona5C1WJ9RkCNKJiZ/K9QrB3XO5SUmRmyiOt4dML
Vi/dgVALcb2c3VDkx6uuYfT2/xfH45Kmc885Vr1/UAuJNI1vlJ4rjGZNjcnlTcUy
iyNiSaGnGl91FKbjnBsOT0kFC+uqrn2yeB3C0Pqqe9LBJQGZGpC2k7urLt/A6mh6
htPwzxpjcEb9puoMwNXBFuDIxUXgPV8Txb1u9AVHH25jhFFo/fEpqgWaA+dZBsrz
2BtenEhxp6wCmW7bjM/cZA37WgJgO/XJvYH8sWuM9fXZQQ8YkW3RKgYsXgpnfNMA
m530mUnOhn9yginfwfUZZA2y+rqytPPZ/LSvplmJ/Hsz6iQ+O9Kz60oXCsnm5Be8
7vWMoT1ZM//znRC0C8TXFHSaFBaIZNs6KgHxSUU+lrV5qQxK2H2+peZv1+2Evj7q
/fV10LZRMylqIe1kS4C4aX3XGZmQTJrKBK5dOt09bIK6/F2LrOTces4kpULXXnOX
sbeUg16Xva5Gd1MeCayrsZ0dZz7K5upvVOPdptnm5yb9s7gAMpr8fgZA1pxSxpF1
jhGkYodltro2LNJH9gF9AMomi3MIup3dlDwuGZFrelO8AS0QC5Dx/B7B9ZSZGbOH
ub8+fXM33OnPbNiiauEqb+68eNS4tzsv3p02GMV2k2CaOtQCgnNSgEYqeUfoBYmV
a2TxJdmsECT7Dkk/m/looFFc2fSfzpbuIxQaY+29/vn3rD6BH5gXtNtd6qXBX8qz
dt+c1IfP3+mFgl7o/CLFq6e5ORm0yno/MKAw85bGYNIwTNsO6TJJ
=/npV
-----END PGP MESSAGE-----`;

const start = async () => {
  try {
    const profile = Profile.of(CLIENT_ID, CLIENT_KEY_ID, RD_KEY_ID);
    // console.log(profile);

    const toolkit = RDToolkit.of(PGP_PATH, profile)
      .addAuthority(ACCESS_KEY, SECRET_KEY)
      .addSecret(CLIENT_KEY_ID, PRIVATE_KEY_PWD);
    // console.log(toolkit);

    const keyPair = await toolkit.keyPair();
    // console.log('Key Pair: ', keyPair);

    const balance = await toolkit.openBalance(ACCOUNT_ID);
    // console.log('has_data: ', balance.has_data);
    // console.log('toObject(): ', balance.toObject());
    // console.log('toArray(): ', balance.toArray());
    // console.log('toString(): ', balance.toString());

    const account = await toolkit.accountDetail(ACCOUNT_ID);
    console.log('account detail: \n', account);

    const decrypt = async () => {
      return await Decrypt(keyPair?.getPrivateKey()!, keyPair?.getPublicKey()!, new Uint8Array(Buffer.from(respData)))
    };

    const wrapped = performance.timerify(decrypt);

    const obs = new PerformanceObserver((list) => {
      console.log(list.getEntries()[0].duration);
    
      performance.clearMarks();
      performance.clearMeasures();
      obs.disconnect();
    });
    obs.observe({ entryTypes: ['function'] });

    const decryptedData = await wrapped();
    const resp = OpenBalanceResponse.deserializeBinary(decryptedData as Uint8Array);
    console.log('test data: \n', resp)

    return balance;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const resp = await start();
  console.log('resp: ', resp);
})();
