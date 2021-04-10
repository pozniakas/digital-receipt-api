import 'source-map-support/register';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeOrmOptions from '#TypeORM';
import { StartModule } from '#Modules/Start/start.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),

    StartModule,
  ],
})
export default class ApiModule {}
