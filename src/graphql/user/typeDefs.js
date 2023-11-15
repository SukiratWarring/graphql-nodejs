export const UserTypeDefs = `#graphql
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
  input UserLoginInput{
    emailId:String!,
    password:String!
  }
`;
