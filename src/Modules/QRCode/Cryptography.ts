import Cryptr from 'cryptr';

const secret = process.env.CRYPTO_SECRET;

export class Cryptography extends Cryptr {
  constructor() {
    super(secret);
  }

  public encryptData(data: string): string {
    return this.encrypt(data);
  }

  public decryptData(data: string): string {
    return this.decrypt(data);
  }
}
