const CryptoJS = require('./aes.js'); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse("1234567890123456"); //十六位十六进制数作为秘钥
const iv = CryptoJS.enc.Utf8.parse('0123456789123456');//十六位十六进制数作为秘钥偏移量
/**
 * aes cbc解密方法、需要iv偏移量
 */
function AesDecrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
/**
 * aes cbc加密方法、需要iv偏移量
 */
function AesEncrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}

/**
 * base64 加密方法
 */
function Base64Encode(val) {
  let str = CryptoJS.enc.Utf8.parse(val);
  let base64 = CryptoJS.enc.Base64.stringify(str);
  return base64;
}

/**
 * base64 解密方法
 */
function Base64Decode(val) {
  let words = CryptoJS.enc.Base64.parse(val);
  return words.toString(CryptoJS.enc.Utf8);
}

/**
 * aes ecb解密方法
 */
function AesDecryptECB(word,key) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
/**
 * aes ecb加密方法
 */
function AesEncryptECB(word,key) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}
//暴露接口
module.exports = {
  AesEncrypt,
  AesDecrypt,
  Base64Encode,
  Base64Decode,
  AesDecryptECB,
  AesEncryptECB,
}
