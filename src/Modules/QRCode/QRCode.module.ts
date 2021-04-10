import { Module } from '@nestjs/common';

import { CryptographyModule } from '#Modules/Cryptography/Cryptography.module';

import { QRCodeService } from './QRCode.service';

@Module({
  providers: [QRCodeService],
  imports: [CryptographyModule],
})
export class QRCodeModule {}
