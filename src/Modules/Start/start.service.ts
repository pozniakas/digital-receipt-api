import { Injectable } from '@nestjs/common';

@Injectable()
export class StartService {
  getHello(): string {
    return 'Hello World!';
  }
}
