import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import * as configModule from '../config/keys';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly _usersService: UserService) {
    super({
      clientID: configModule.configs.googleClientID,
      clientSecret: configModule.configs.googleClientSecret,
      callbackURL: '/auth/google/redirect',
      scope: ['email', 'profile'],
      proxy: true,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const { name, emails, photos, id } = profile;

    const user: any = {
      email: emails[0].value,
      name: name.givenName,
      id: id,
    };

    const existingUser: User = await this._usersService.findOne(id);
    if (existingUser) {
      console.log('exist');
      // resume auth process
      done(null, existingUser);
    } else {
      const createdUser = await this._usersService.create(user);
      done(null, createdUser);
    }
  }
}
