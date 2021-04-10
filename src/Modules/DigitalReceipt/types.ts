import { BaseEntity } from 'typeorm';

export interface IDigitalReceipt {
  amount: number;
  trTime: Date;
  counterParty: string;
  paymentMethod: PaymentMethod;
}

export interface IDigitalReceiptEntity extends IDigitalReceipt, BaseEntity {}

export enum PaymentMethod {
  CASH = 'CASH',
  DEBIT_CARD = 'DEBIT_CARD',
  CREDIT_CARD = 'CREDIT_CARD',
}
