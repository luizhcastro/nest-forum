import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "./shared/config/envs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(env.PORT);
}
bootstrap();
