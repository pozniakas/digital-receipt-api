import { Module } from '@nestjs/common';

import { Cryptography, QRCodeService } from '#Modules/QRCode';
import { QRCodeController } from './QRCode.controller';

@Module({
  controllers: [QRCodeController],
  providers: [QRCodeService, Cryptography],
  exports: [QRCodeService, Cryptography],
})
export class QRCodeModule {}
