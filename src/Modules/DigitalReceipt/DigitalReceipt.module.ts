import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QRCodeModule } from '#Modules/QRCode/QRCode.module';

import { DigitalReceiptController } from './DigitalReceipt.controller';
import { DigitalReceipt } from './DigitalReceipt.entity';
import { DigitalReceiptService } from './DigitalReceipt.service';

@Module({
  controllers: [DigitalReceiptController],
  imports: [TypeOrmModule.forFeature([DigitalReceipt]), QRCodeModule],
  providers: [DigitalReceiptService],
})
export class DigitalReceiptModule {}
