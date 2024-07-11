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
  
  import {
    CLIENT_ID,
    ACCESS_KEY,
    SECRET_KEY,
    CLIENT_KEY_ID,
    RD_KEY_ID,
    PRIVATE_KEY_PWD,
    PGP_PATH,
  } from './config';
  
    
  (async () => {
    const passphrase = PRIVATE_KEY_PWD; // what the private key is encrypted with
  
    const legendPrivateKeyPath = path.join(PGP_PATH, CLIENT_ID, CLIENT_KEY_ID, 'private.key');
    const legendPublicKeyPath = path.join(PGP_PATH, CLIENT_ID, CLIENT_KEY_ID, 'public.key');
  
    const rdPrivateKeyPath = path.join(PGP_PATH, RD_KEY_ID, 'private.key');
    const rdPublicKeyPath = path.join(PGP_PATH, RD_KEY_ID, 'public.key');
  
    const legendPrivateKeyArmored = fs.readFileSync(legendPrivateKeyPath, { encoding: 'utf8' });
    const legendPublicKeyArmored = fs.readFileSync(legendPublicKeyPath, { encoding: 'utf8' });
    const legendPublicKey = await readKey({ armoredKey: legendPublicKeyArmored });
    const legendPrivateKey = await decryptKey({
        privateKey: await readPrivateKey({ armoredKey: legendPrivateKeyArmored }),
        passphrase
    });
  
    const rdPrivateKeyArmored = fs.readFileSync(rdPrivateKeyPath, { encoding: 'utf8' });
    const rdPublicKeyArmored = fs.readFileSync(rdPublicKeyPath, { encoding: 'utf8' });
    const rdPublicKey = await readKey({ armoredKey: rdPublicKeyArmored });
    const rdPrivateKey = await decryptKey({
        privateKey: await readPrivateKey({ armoredKey: rdPrivateKeyArmored })
    });
  
    const encrypted = await encrypt({
        message: await createMessage({ text: 'Hello, World!' }), // input as Message object
        encryptionKeys: rdPublicKey,
        signingKeys: legendPrivateKey // optional
    });
    console.log(encrypted); // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
  
    const message = await readMessage({
        armoredMessage: encrypted // parse armored message
    });
    const { data: decrypted, signatures } = await decrypt({
        message,
        verificationKeys: legendPublicKey, // optional
        decryptionKeys: rdPrivateKey
    });
    console.log(decrypted); // 'Hello, World!'
    
    console.log('legend public key: ', legendPublicKey.getAlgorithmInfo());
    console.log('legend private key: ', legendPrivateKey.getAlgorithmInfo());
    console.log('rd public key: ', rdPublicKey.getAlgorithmInfo());
    console.log('rd private key: ', rdPrivateKey.getAlgorithmInfo());

    // check signature validity (signed messages only)
    try {
        await signatures[0].verified; // throws on invalid signature
        console.log('Signature is valid');
    } catch (e) {
        throw new Error('Signature could not be verified: ' + e.message);
    }
  })();