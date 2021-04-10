import { NestFactory } from '@nestjs/core';

import ApiModule from '#ApiModule';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(PORT);
}
bootstrap();
