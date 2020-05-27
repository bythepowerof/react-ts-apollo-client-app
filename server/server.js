const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs: importSchema('schema.graphql'),
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});