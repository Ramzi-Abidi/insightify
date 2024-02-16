// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as configModule from './config/keys';

@Module({
  // imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  imports: [
    MongooseModule.forRoot(
      configModule.configs.mongoURI,
    ),
  ],
})
export class DatabaseModule {}
