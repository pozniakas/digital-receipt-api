import { QRCodeService } from '#Modules/QRCode/QRCode.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class StartController {
  constructor(private readonly qrCodeService: QRCodeService) {}

  @Get()
  getHello(): Promise<string> {
    return this.qrCodeService.addDataToQRCode('Tavo Tevas');
  }
}
