import { v4 as uuid } from 'uuid';
import faker from 'faker';
import { IDigitalReceipt, PaymentMethod } from '../types';

export const generateMockDigitalReceiptService = () => ({
  generateDigitalReceipt: jest.fn(),
  getDigitalReceipt: jest.fn(),
});

export const mockDigitalReceipt: IDigitalReceipt = {
  id: uuid(),
  amount: parseInt(faker.finance.amount(1, 1000, 2)),
  trTime: new Date(),
  counterParty: faker.lorem.word(10),
  paymentMethod: PaymentMethod.CASH,
};
