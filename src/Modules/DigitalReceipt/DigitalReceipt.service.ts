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

  async generateDigitalReceipt(digitalReceiptInfo: IDigitalReceipt) {
    const digitalReceipt = this.digitalReceiptRepository.create(
      digitalReceiptInfo,
    );

    await digitalReceipt.save();

    return digitalReceipt;
  }

  async getDigitalReceipt(id: string) {
    return this.digitalReceiptRepository.findOne({ id });
  }
}
