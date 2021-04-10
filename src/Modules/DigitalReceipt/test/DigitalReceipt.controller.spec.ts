import { Test, TestingModule } from '@nestjs/testing';
import { DigitalReceiptController } from '../DigitalReceipt.controller';

describe('DigitalReceiptController', () => {
  let controller: DigitalReceiptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalReceiptController],
    }).compile();

    controller = module.get<DigitalReceiptController>(DigitalReceiptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
