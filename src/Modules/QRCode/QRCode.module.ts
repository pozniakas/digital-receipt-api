import { Module } from '@nestjs/common';

import { CryptographyModule } from '#Modules/Cryptography/Cryptography.module';

import { QrCodeService } from './QRCode.service';

@Module({
  providers: [QrCodeService],
  imports: [CryptographyModule],
})
export class QrCodeModule {}
