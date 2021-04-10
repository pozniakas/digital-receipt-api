import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DigitalReceipt } from './DigitalReceipt.entity';
import { IDigitalReceipt } from './types';

@Injectable()
export class DigitalReceiptService {
  constructor(
    @InjectRepository(DigitalReceipt)
    private digitalReceiptRepository: Repository<DigitalReceipt>,
  ) {}

  generateDigitalReceipt(digitalReceipt: IDigitalReceipt) {
    return digitalReceipt;
  }

  getDigitalReceipt(id: string) {
    return id;
  }
}
