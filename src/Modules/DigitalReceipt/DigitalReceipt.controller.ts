import { Controller, Get, Post } from '@nestjs/common';
import { DigitalReceiptService } from './DigitalReceipt.service';

@Controller('DigitalReceipt')
export class DigitalReceiptController {
  constructor(private digitalReceiptService: DigitalReceiptService) {}

  @Get()
  getReceipt() {}

  @Post()
  generateReceipt() {}
}
