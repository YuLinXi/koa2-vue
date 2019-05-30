import { Schema } from 'mongoose';
import testSchema from './test';

const children = new Schema({ title: String });

export default new Schema({
  title: String,
  child: testSchema,
  children: [children]
})
