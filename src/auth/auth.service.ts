import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Request } from 'express';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  googleLogin(req: Request) {
    if (!req.user) {
      return 'No user from google';
    }
    return req.user;
  }
}
