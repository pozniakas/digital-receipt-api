import { MigrationInterface, QueryRunner } from 'typeorm';

export class DigitalReceiptTable1618074270935 implements MigrationInterface {
  name = 'DigitalReceiptTable1618074270935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `digital_receipts` (`id` varchar(36) NOT NULL, `amount` double NOT NULL, `tr_time` datetime NOT NULL, `counter_party` varchar(255) NOT NULL, `payment_method` enum ('CASH', 'DEBIT_CARD', 'CREDIT_CARD') NOT NULL DEFAULT 'CASH', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `digital_receipts`');
  }
}
