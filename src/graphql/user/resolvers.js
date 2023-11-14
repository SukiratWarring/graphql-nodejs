// Resolvers define how to fetch the types defined in your schema.

import { UserService } from "../../services/user.js";

// This resolver retrieves books from the "books" array above.
export const custom = {
  Info: {
    authorinfo: (book) => authorsDesc.find((obj) => obj.author === book.author),
  },
};
const queries = {
  books: () => books,
  authorsDesc: () => authorsDesc,
  getauthByname: (parent, { name }) => books.find((obj) => obj.author === name),
};

const mutations = {
  createBook: (parent, args) => {
    const book = args.input;
    console.log("book", book);
  },
  createUser: async (_, payload) => {
    const res = await UserService.createUser(payload);
    return res;
  },
};
export const UserResolver = { queries, mutations, custom };
const books = [
  {
    id: "Sukirat",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: "Hashman",
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const authorsDesc = [
  {
    id: 1,
    FamousBook: "The Awakening",
    author: "Kate Chopin",
    age: 55,
  },
  {
    id: 2,
    FamousBook: "GGG",
    author: "Ruskin Bond",
    age: 22,
  },
];
