import { model } from 'mongoose';
import { testSchema } from '../schema';

const Test = model('Test', testSchema);

export default Test
