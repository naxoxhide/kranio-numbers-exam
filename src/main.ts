import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe, VersioningType } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
  })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  }

  const config = new DocumentBuilder()
    .setTitle('Kranio Interview Test')
    .setDescription('Documentación Api Numbers')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('api/docs', app, document)
  await app.listen(3000);
}
bootstrap();
