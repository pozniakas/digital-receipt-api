import { v4 as uuid } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DigitalReceipt } from '#Modules/DigitalReceipt/DigitalReceipt.entity';
import { DigitalReceiptService } from '#Modules/DigitalReceipt/DigitalReceipt.service';

import {
  generateMockDigitalReceiptRepository,
  mockDigitalReceiptEntity,
} from './Mocks';

describe('In DigitalReceiptService', () => {
  let digitalReceiptService;
  let digitalReceiptRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(DigitalReceipt),
          useFactory: generateMockDigitalReceiptRepository,
        },
        DigitalReceiptService,
      ],
    }).compile();

    digitalReceiptService = module.get(DigitalReceiptService);

    digitalReceiptRepository = await module.get(
      getRepositoryToken(DigitalReceipt),
    );
  });

  const id = uuid();

  describe('calling generateDigitalReceipt', () => {
    it('should create and save new digital receipt', async () => {
      digitalReceiptRepository.create.mockReturnValue(mockDigitalReceiptEntity);

      const promise = digitalReceiptService.generateDigitalReceipt(
        mockDigitalReceiptEntity,
      );

      await expect(promise).resolves.toEqual(mockDigitalReceiptEntity);
      expect(digitalReceiptRepository.create).toBeCalledTimes(1);
      expect(digitalReceiptRepository.create).toBeCalledWith(
        mockDigitalReceiptEntity,
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
