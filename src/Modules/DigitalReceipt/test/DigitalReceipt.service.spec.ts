import { v4 as uuid } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DigitalReceipt } from '#Modules/DigitalReceipt/DigitalReceipt.entity';
import { DigitalReceiptService } from '#Modules/DigitalReceipt/DigitalReceipt.service';
import { QRCodeService } from '#Modules/QRCode';

import {
  generateMockDigitalReceiptRepository,
  generateMockqrCodeService,
  mockDigitalReceiptEntity,
} from './Mocks';

describe('In DigitalReceiptService', () => {
  let digitalReceiptService;
  let digitalReceiptRepository;
  let qrCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(DigitalReceipt),
          useFactory: generateMockDigitalReceiptRepository,
        },
        DigitalReceiptService,
        { provide: QRCodeService, useFactory: generateMockqrCodeService },
      ],
    }).compile();

    digitalReceiptService = await module.get(DigitalReceiptService);
    digitalReceiptRepository = await module.get(
      getRepositoryToken(DigitalReceipt),
    );
    qrCodeService = await module.get(QRCodeService);
  });

  const id = uuid();

  describe('calling generateDigitalReceipt', () => {
    it('should create and save new digital receipt, return encrypted QR code', async () => {
      digitalReceiptRepository.create.mockReturnValue(mockDigitalReceiptEntity);

      const promise = digitalReceiptService.generateDigitalReceipt(
        mockDigitalReceiptEntity,
      );

      await expect(promise).resolves.toContain('data:image/png;base64');
      expect(digitalReceiptRepository.create).toBeCalledTimes(1);
      expect(digitalReceiptRepository.create).toBeCalledWith(
        mockDigitalReceiptEntity,
      );
      expect(qrCodeService.addDataToQRCode).toBeCalledTimes(1);
      expect(qrCodeService.addDataToQRCode).toBeCalledWith(
        mockDigitalReceiptEntity.id,
      );
    });
  });

  describe('calling getDigitalReceipt', () => {
    it('should find digital receipt', async () => {
      digitalReceiptRepository.findOne.mockReturnValue(
        mockDigitalReceiptEntity,
      );

      const promise = digitalReceiptService.getDigitalReceipt(id);

      await expect(promise).resolves.toEqual(mockDigitalReceiptEntity);
      expect(digitalReceiptRepository.findOne).toBeCalledTimes(1);
      expect(digitalReceiptRepository.findOne).toBeCalledWith({ id });
    });
  });
});
