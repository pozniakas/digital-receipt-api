import { Body, Controller, Get, Post } from '@nestjs/common';

import { DigitalReceiptService } from './DigitalReceipt.service';
import { TransactionDto } from './DTO/transaction.dto';

@Controller('DigitalReceipt')
export class DigitalReceiptController {
  constructor(private digitalReceiptService: DigitalReceiptService) {}

  @Get()
  getReceipt() {}

  @Post()
  generateReceipt(@Body() transactionDto: TransactionDto) {
    return this.digitalReceiptService.generateDigitalReceipt(transactionDto);
  }
}
