import crypto from 'crypto';

class Encryption {
  private readonly alg: string;
  private readonly pwd: string;
  private readonly iv: Buffer;

  constructor() {
    this.alg = 'aes-128-ctr';
    this.pwd = process.env.ENCRYPTION_PASS || 'abcdef0123456789';
    this.iv = crypto.randomBytes(16);
  }

  crypt(str: string): string {
    const cipher = crypto.createCipheriv(this.alg, this.pwd, this.iv);
    const encrypted = cipher.update(str, 'utf-8', 'base64');
    return encrypted;
  }

  decrypt(encryptedStr: string): string {
    const decipher = crypto.createDecipheriv(this.alg, this.pwd, this.iv);
    const plain = decipher.update(encryptedStr, 'base64', 'utf-8');
    return plain;
  }
}

export const encryption = new Encryption();
