import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userinfoSchema = new Schema({
  username: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
});

export default mongoose.model('UserInfo', userinfoSchema);
