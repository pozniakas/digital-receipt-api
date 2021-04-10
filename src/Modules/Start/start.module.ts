import { Module } from '@nestjs/common';

import { QRCodeModule } from '#Modules/QRCode/QRCode.module';

import { StartController } from './start.controller';
import { StartService } from './start.service';

@Module({
  controllers: [StartController],
  providers: [StartService],
  imports: [QRCodeModule],
})
export class StartModule {}
