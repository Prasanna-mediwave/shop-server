import moment from "moment";
import mongoose, { Schema } from "mongoose";
import { v4 as uuid } from "uuid";

const signupSchema: Schema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
});
const SignupModel = mongoose.model("signUpDetial", signupSchema);
export default SignupModel;
