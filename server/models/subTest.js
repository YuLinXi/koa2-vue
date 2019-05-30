import { model } from 'mongoose';
import { subTestSchema } from '../schema';

const SubTest = model('SubTest', subTestSchema);

export default SubTest
