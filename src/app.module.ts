import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './auth/session.serializer';
import { GoogleStrategy } from './auth/google.strategy';

@Module({
  imports: [
    AuthModule,
    PassportModule.register({ session: true }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
