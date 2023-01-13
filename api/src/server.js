const sequelize = require('./database');
const server = require('express')();
const schema = require('./gqlschemas/schema');
const root = require('./gqlresolvers/resolver');
const { graphqlHTTP } = require('express-graphql');

const STAGE = process.env.STAGE;

server.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

sequelize.sync({force:true, alter:true}).then(() => {
  if (STAGE === 'dev') {
    console.log('Starting dev server.')
  } else {
    console.log('Starting test server.')
  }
})

server.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/api');
})