import { Injectable, Request } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(user: User) {
    const { name, email, id } = user;

    const newUser = new this.userModel({ name, email, id });
    return newUser.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return this.userModel.findOne({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
