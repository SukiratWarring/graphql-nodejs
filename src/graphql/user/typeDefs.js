export const UserTypeDefs = `#graphql
  type Book {
    id:String
    title: String
    author: String
  }
  type User{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
  }
  input CreateUserInput{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
  }
  type Authors{
    id: Int,
    FamousBook: String,
    author: String,
    age: Int,
  }
  type Info{
    id:String
    title: String
    author: String
    authorinfo:Authors
  }
  input CreateBookInput{
    id:String!
    title: String!
    author: String!    
  }
`;
