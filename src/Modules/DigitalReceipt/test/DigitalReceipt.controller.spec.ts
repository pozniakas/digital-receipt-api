import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { DigitalReceiptController } from '#Modules/DigitalReceipt/DigitalReceipt.controller';
import { DigitalReceiptService } from '#Modules/DigitalReceipt/DigitalReceipt.service';

import { generateMockDigitalReceiptService, mockDigitalReceipt } from './Mocks';

describe('In DigitalReceiptController', () => {
  let digitalReceiptController: DigitalReceiptController;
  let digitalReceiptService: DigitalReceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalReceiptController],
      providers: [
        {
          provide: DigitalReceiptService,
          useFactory: generateMockDigitalReceiptService,
        },
      ],
    }).compile();

    digitalReceiptService = module.get<DigitalReceiptService>(
      DigitalReceiptService,
    );

    digitalReceiptController = module.get<DigitalReceiptController>(
      DigitalReceiptController,
    );
  });

  const id = uuid();

  it('calling getDigitalReceipt controller should call getDigitalReceipt service method', async () => {
    digitalReceiptController.getDigitalReceipt(id);

    expect(digitalReceiptService.getDigitalReceipt).toBeCalledTimes(1);
    expect(digitalReceiptService.getDigitalReceipt).toBeCalledWith(id);
  });

  it('calling generateDigitalReceipt controller should call generateDigitalReceipt service method', async () => {
    digitalReceiptController.generateDigitalReceipt(mockDigitalReceipt);

    expect(digitalReceiptService.generateDigitalReceipt).toBeCalledTimes(1);
    expect(digitalReceiptService.generateDigitalReceipt).toBeCalledWith(
      mockDigitalReceipt,
    );
  });
});
