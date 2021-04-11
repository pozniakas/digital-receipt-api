import { Module } from '@nestjs/common';

import { Cryptography, QRCodeService } from '#Modules/QRCode';

@Module({
  providers: [QRCodeService, Cryptography],
  exports: [QRCodeService, Cryptography],
})
export class QRCodeModule {}
