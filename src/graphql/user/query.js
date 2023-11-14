export const UserQuery = `#graphql
    books:[Book]
    authorsDesc:[Authors]
    getauthByname(name :String!):Info
    `;
