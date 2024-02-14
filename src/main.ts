import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
const passport = require('passport');

async function bootstrap() {
  // client id: 1063097861820-h3u5cuhnue8jros2ahrpic4gvbssqm57.apps.googleusercontent.com
  // client secret: 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
  const app = await NestFactory.create(AppModule);

  //enable CORS origin
  app.enableCors();
  // global prefix
  // app.setGlobalPrefix('api/v1/');
  app.use(cookieParser());

  // somewhere in your initialization file
  app.use(
    session({
      secret: 'adsfopzjgorx',
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(5000);
}
bootstrap();
