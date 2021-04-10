import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';

import { Cryptography } from './Cryptography';

@Injectable()
export class QRCodeService {
  addDataToQrCode(data: string) {
    const encryptedData = new Cryptography(data).encryptData();
    return QRCode.toDataURL(encryptedData);
  }
}
