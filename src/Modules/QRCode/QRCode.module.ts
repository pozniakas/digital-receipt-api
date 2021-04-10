import { Module } from '@nestjs/common';

import { Cryptography } from './Cryptography';
import { QRCodeService } from './QRCode.service';

@Module({
  providers: [QRCodeService, Cryptography],
  exports: [QRCodeService],
})
export class QRCodeModule {}
