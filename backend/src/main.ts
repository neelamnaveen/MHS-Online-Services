import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsMiddleware } from './cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new CorsMiddleware().use);

  await app.listen(3001);
}
bootstrap();
