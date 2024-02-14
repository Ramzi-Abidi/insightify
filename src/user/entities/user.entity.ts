// user.schema.ts
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  email: string;
}
