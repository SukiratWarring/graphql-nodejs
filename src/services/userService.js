import { createHmac } from "node:crypto";
import { User } from "../../Model/UserModel.js";
import jwt from "jsonwebtoken";

export class UserService {
  static async createUser(payload) {
    const { firstName, lastName, emailId, password } = payload.input;
    const salt = process.env.SALT;
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    const exist = await User.findOne({ emailId: emailId });

    if (exist) {
      return exist._id.toString();
    } else {
      try {
        const res = await User.create({
          firstName,
          lastName,
          emailId,
          password: hashedPassword,
        });
        return res._id;
      } catch (error) {
        console.log("error", error);
        return error;
      }
    }
  }
  static async issueJwt(email, _id) {
    return;
  }
  static async userLogin(payload) {
    const { emailId, password } = payload;
    const salt = process.env.SALT;
    const { _id, password: gethashedPassword } = await User.findOne({
      emailId: emailId,
    }).select("_id password");
    if (!gethashedPassword) {
      throw new Error("User not found");
    }
    const passwordCreation = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (gethashedPassword === passwordCreation) {
      const token = jwt.sign({ emailId, _id }, process.env.JWT_SECRET);
      console.log("token", token);
      return token;
    } else {
      throw new Error("Please enter correct password");
    }
  }
  static async decodeJwt(token) {
    const decodedValue = jwt.decode(token, process.env.JWT_SECRET);
    console.log("decodedValue", decodedValue);
    return decodedValue;
  }
}
