// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ramziabididev:Gazert7890*@cluster0.xrzca1g.mongodb.net/insightify_dev?retryWrites=true&w=majority',
    ),
  ],
})
export class DatabaseModule {}
