import { createHmac } from "node:crypto";
import { User } from "../../Model/UserModel.js";
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
}
