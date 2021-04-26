import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IDigitalReceipt, PaymentMethod } from './types';

@Entity('digital_receipts')
export class DigitalReceipt extends BaseEntity implements IDigitalReceipt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'double' })
  amount: number;

  @Column({ name: 'tr_time' })
  trTime: Date;

  @Column({ name: 'counter_party' })
  counterParty: string;

  @Column({
    name: 'payment_method',
    type: 'enum',
    enum: Object.values(PaymentMethod),
    default: PaymentMethod.CASH,
  })
  paymentMethod: PaymentMethod;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
