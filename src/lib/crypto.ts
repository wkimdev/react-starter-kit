import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_CRYPTO_SECRET ?? "default-secret-key";

export function encrypt(plainText: string): string {
  return CryptoJS.AES.encrypt(plainText, SECRET_KEY).toString();
}

export function decrypt(cipherText: string): string {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function hashSHA256(text: string): string {
  return CryptoJS.SHA256(text).toString();
}

export function hashMD5(text: string): string {
  return CryptoJS.MD5(text).toString();
}
