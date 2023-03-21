import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  user_name: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
