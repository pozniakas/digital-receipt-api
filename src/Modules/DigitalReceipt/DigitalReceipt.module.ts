import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DigitalReceiptController } from './DigitalReceipt.controller';
import { DigitalReceipt } from './DigitalReceipt.entity';
import { DigitalReceiptService } from './DigitalReceipt.service';

@Module({
  controllers: [DigitalReceiptController],
  imports: [TypeOrmModule.forFeature([DigitalReceipt])],
  providers: [DigitalReceiptService],
})
export class DigitalReceiptModule {}
