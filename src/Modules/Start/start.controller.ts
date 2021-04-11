import { Controller, Get } from '@nestjs/common';

import { StartService } from './start.service';

@Controller()
export class StartController {
  constructor(private readonly startService: StartService) {}

  @Get()
  getHello() {
    return this.startService.getHello();
  }
}
