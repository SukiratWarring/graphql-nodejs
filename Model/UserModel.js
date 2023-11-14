import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  password: { type: String, required: true },
  emailId: { type: String, unique: true, required: true },
});

export const User = mongoose.model("User", dataSchema);
