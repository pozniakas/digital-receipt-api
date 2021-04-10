import { Module } from '@nestjs/common';

import { QRCodeService } from './QRCode.service';

@Module({
  providers: [QRCodeService],
  exports: [QRCodeService],
})
export class QRCodeModule {}
