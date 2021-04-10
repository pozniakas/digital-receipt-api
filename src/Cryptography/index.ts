import Cryptr from 'cryptr';

const secret = process.env.CRYPTO_SECRET;

export default class Cryptography extends Cryptr {
  constructor() {
    super(secret);
  }

  public encrypt(data: string): string {
    return this.encrypt(data);
  }

  public decrypt(hash: string): string {
    return this.decrypt(hash);
  }
}
