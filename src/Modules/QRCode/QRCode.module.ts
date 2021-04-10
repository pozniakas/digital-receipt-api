import { Module } from '@nestjs/common';

import { QRCodeService } from './QRCode.service';

@Module({
  providers: [QRCodeService],
})
export class QRCodeModule {}
