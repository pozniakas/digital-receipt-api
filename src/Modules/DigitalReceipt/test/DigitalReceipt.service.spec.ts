import { Test, TestingModule } from '@nestjs/testing';
import { DigitalReceiptService } from '../DigitalReceipt.service';

describe('DigitalReceiptService', () => {
  let service: DigitalReceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalReceiptService],
    }).compile();

    service = module.get<DigitalReceiptService>(DigitalReceiptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
