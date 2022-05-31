import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1622304168366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('yourzip', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('yourzip', true);
  }
}
