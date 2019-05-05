var CryptoJS = require("crypto-js");
const fs = require('fs');

const source = fs.readFileSync('./test.txt','utf8');
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(source, 'secretl key 123');

// Decrypt
var bytes  = CryptoJS.AES.decrypt('ciphertext', 'secretl key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

export {ciphertext};
