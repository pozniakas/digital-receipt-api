import { CryptographyService } from '#Modules/Cryptography/Cryptography.service';
import { Module } from '@nestjs/common';
import { QrCodeService } from './QRCode.service';

@Module({
  providers: [QrCodeService],
  imports: [CryptographyService],
})
export class QrCodeModule {}
