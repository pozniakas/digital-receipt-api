import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';

import { Cryptography } from './Cryptography';

@Injectable()
export class QRCodeService {
  constructor(private cryptography: Cryptography) {}

  addDataToQRCode(data: string) {
    const encryptedData = this.cryptography.encryptData(
      generateDataObject(data),
    );
    return QRCode.toDataURL(encryptedData);
  }
}

const generateDataObject = (data: string) => {
  return JSON.stringify({ digitalReceiptApiData: data });
};
