export const UserQuery = `#graphql
    books:[Book]
    authorsDesc:[Authors]
    getauthByname(name :String!):Info
    userLogin(input:UserLoginInput!):String
    getCurrentUserLoggedIn:String
    `;
