import faker from 'faker';
import {
  IDigitalReceipt,
  IDigitalReceiptEntity,
  PaymentMethod,
} from '#Modules/DigitalReceipt/types';
import { v4 as uuid } from 'uuid';

export const generateMockDigitalReceiptService = () => ({
  generateDigitalReceipt: jest.fn(),
  getDigitalReceipt: jest.fn(),
});

export const mockDigitalReceipt: IDigitalReceipt = {
  amount: parseInt(faker.finance.amount(1, 1000, 2)),
  trTime: new Date(),
  counterParty: faker.lorem.word(10),
  paymentMethod: PaymentMethod.CASH,
};

export const mockDigitalReceiptEntity: IDigitalReceiptEntity = {
  id: uuid(),
  amount: parseInt(faker.finance.amount(1, 1000, 2)),
  trTime: new Date(),
  counterParty: faker.lorem.word(10),
  paymentMethod: PaymentMethod.CASH,
  save: jest.fn(),
  hasId: jest.fn(),
  remove: jest.fn(),
  softRemove: jest.fn(),
  recover: jest.fn(),
  reload: jest.fn(),
};

export const generateMockDigitalReceiptRepository = () => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

export const generateMockqrCodeService = () => ({
  addDataToQRCode: jest.fn().mockResolvedValue('data:image/png;base64'),
});
