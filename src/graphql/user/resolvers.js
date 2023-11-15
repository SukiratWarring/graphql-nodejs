// Resolvers define how to fetch the types defined in your schema.
import { UserService } from "../../services/userService.js";
// This resolver retrieves books from the "books" array above.
const queries = {
  userLogin: async (_, payload) => {
    const res = await UserService.userLogin(payload.input);
    return res;
  },
  getCurrentUserLoggedIn: async (_, payload, context) => {
    console.log("context", context);
    if (context && context.emailId) {
      return context.emailId;
    }
    throw new Error();
  },
};

const mutations = {
  createUser: async (_, payload) => {
    const res = await UserService.createUser(payload);
    return res;
  },
};
export const UserResolver = { queries, mutations };
