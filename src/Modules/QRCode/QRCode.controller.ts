import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '#Modules/DigitalReceipt/Guard/customAuthGuard';
import { Cryptography } from './Cryptography';

@UseGuards(AuthGuard)
@Controller('/validate')
export class QRCodeController {
  constructor(private cryptography: Cryptography) {}

  @Post()
  validateData(@Body() { data }: { data: string }) {
    const decryptedData = JSON.parse(this.cryptography.decryptData(data));

    if (!Object.keys(decryptedData).includes('digitalReceiptApiData')) {
      throw new Error('Not Valid data');
    }

    return decryptedData.digitalReceiptApiData;
  }
}
