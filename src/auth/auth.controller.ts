import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, RequestHandler } from 'express';
import { GoogleAuthGuard } from './utils/auth.google.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req: Request) {
    return this.authService.googleLogin(req);
  }

  @Get('/current-user')
  user(@Req() req: Request) {
    if (req.user) {
      return { message: 'Authenticated', user: req.user }
    } else {
      return { message: 'Not Authenticated' }
    }
  }
}
