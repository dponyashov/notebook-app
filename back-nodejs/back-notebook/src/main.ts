import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";
import { ClassSerializerInterceptor } from "@nestjs/common/serializer";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ежедневник')
    .setDescription('REST API ежедневника')
    .setVersion('1.0.0.')
    .addTag('Notebook API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get('Reflector')));

  await app.listen(PORT, () => {
    console.log(`start ${PORT}`)
  });
}

start();
