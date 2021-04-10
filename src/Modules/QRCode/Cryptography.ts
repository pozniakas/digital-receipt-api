import Cryptr from 'cryptr';

const secret = process.env.CRYPTO_SECRET;

export class Cryptography extends Cryptr {
  constructor(private data: string) {
    super(secret);
  }

  public encryptData(): string {
    return this.encrypt(this.data);
  }
}
