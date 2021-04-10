import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { DigitalReceiptService } from './DigitalReceipt.service';
import { IDigitalReceipt } from './types';

@Controller('/digital-receipt')
export class DigitalReceiptController {
  constructor(private digitalReceiptService: DigitalReceiptService) {}

  @Get('/:id')
  getDigitalReceipt(@Param('id') id: string) {
    return this.digitalReceiptService.getDigitalReceipt(id);
  }

  @Post()
  generateDigitalReceipt(@Body() digitalReceipt: IDigitalReceipt) {
    return this.digitalReceiptService.generateDigitalReceipt(digitalReceipt);
  }
}
