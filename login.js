import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
config();

const loginSchema = mongoose.Schema({
  email: String,
  password: String,
});

loginSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password);
  next();
});
const Login = mongoose.model('Login', loginSchema);

export default Login;
