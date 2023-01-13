const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type UserData {
    name: String!
    headline: String!
    numConnections: Int!
    profileViews: Int!
  }

  type Query {
    hello: String
    getUserData: UserData
  }
`);

module.exports = schema;