export interface IDigitalReceipt {
  id: string;
  amount: number;
  trTime: Date;
  counterParty: string;
  paymentMethod: PaymentMethod;
}

export enum PaymentMethod {
  CASH = 'CASH',
  DEBIT_CARD = 'DEBIT_CARD',
  CREDIT_CARD = 'CREDIT_CARD',
}
