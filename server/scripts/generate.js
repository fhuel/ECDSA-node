const secp = require("ethereum-cryptography/secp256k1");
// const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
const PublicKeyCredential = secp.getPublicKey(privateKey);
console.log("Private key: ", toHex(privateKey));
console.log("Public key: ", toHex(PublicKeyCredential));
