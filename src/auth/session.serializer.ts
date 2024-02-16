import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly _usersService: UserService) {
    super();
  }

  // store token in cookie
  serializeUser(user: User, done: Function) {
    done(null, user.id);
  }
  // transform token to user payload 
  async deserializeUser(id: string | null, done: Function) {
    const user = await this._usersService.findOne(id);
    console.log("user from deserialize", user);
    return user ? done(null, user) : done(null, null);
  }
}
