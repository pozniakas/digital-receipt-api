import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DigitalReceipt } from './DigitalReceipt.entity';
import { IDigitalReceipt } from './types';
import { QRCodeService } from '#Modules/QRCode';

@Injectable()
export class DigitalReceiptService {
  constructor(
    @InjectRepository(DigitalReceipt)
    private digitalReceiptRepository: Repository<DigitalReceipt>,
    private qrCodeService: QRCodeService,
  ) {}

  async generateDigitalReceipt(digitalReceiptInfo: IDigitalReceipt) {
    const digitalReceipt = this.digitalReceiptRepository.create(
      digitalReceiptInfo,
    );

    await digitalReceipt.save();

    return this.qrCodeService.addDataToQRCode(digitalReceipt.id);
  }

  async getDigitalReceipt(id: string) {
    return this.digitalReceiptRepository.findOne({ id });
  }
}
