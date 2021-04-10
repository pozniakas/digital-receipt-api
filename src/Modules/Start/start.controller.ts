import { Controller, Get } from '@nestjs/common';
import { StartService } from './start.service';

@Controller()
export class StartController {
  constructor(private readonly startService: StartService) {}

  @Get()
  getHello(): string {
    return this.startService.getHello();
  }
}
