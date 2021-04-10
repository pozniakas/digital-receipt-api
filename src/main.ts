import { NestFactory } from '@nestjs/core';

import AppModule from '#AppModule';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
