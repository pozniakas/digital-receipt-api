import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';

import { CryptographyService } from '#Modules/Cryptography';

@Injectable()
export class QRCodeService {
  constructor(private cryptographyService: CryptographyService) {}

  addDataToQrCode(data: string) {
    const excryptedData = this.cryptographyService.encrypt(data);

    return QRCode.toDataURL(excryptedData);
  }
}
