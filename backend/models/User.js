import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    password: { type: String, required: true, minlength: 6 },
    avatar: { type: String, default: "" },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);
export default User;