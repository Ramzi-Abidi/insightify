import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { SessionSerializer } from './session.serializer';
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, SessionSerializer],
  imports: [UserModule],
})
export class AuthModule {}
