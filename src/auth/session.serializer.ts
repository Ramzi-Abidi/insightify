import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly _usersService: UserService) {
    super();
  }

  // store in cookie
  serializeUser(user: User, done: Function) {
    done(null, user.id);
  }
  // get user from user_id which is cookie
  async deserializeUser(payload: any, done: Function) {
    console.log('payload', payload); // taking the unique id from session and return user object.
    const user = await this._usersService.findOne(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
