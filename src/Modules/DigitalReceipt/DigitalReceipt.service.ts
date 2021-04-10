import { Injectable } from '@nestjs/common';

import { TransactionDto } from './DTO/transaction.dto';

@Injectable()
export class DigitalReceiptService {
  generateDigitalReceipt(transactionDto: TransactionDto) {}
}
