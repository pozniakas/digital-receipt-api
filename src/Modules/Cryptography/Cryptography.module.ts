import { Module } from '@nestjs/common';
import { CryptographyService } from './Cryptography.service';

@Module({
  providers: [CryptographyService],
  exports: [CryptographyService],
})
export class CryptographyModule {}
