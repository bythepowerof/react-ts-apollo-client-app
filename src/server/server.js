const { ApolloServer, PubSub, MockList, withFilter } = require('apollo-server');
const { importSchema } = require('graphql-import');

const pubsub = new PubSub();
const CHANGED = 'CHANGED';

var queryMocks = require('./query.json');

const changeFunc = () => {
 return queryMocks[0]
}

const mocks = {
    Query: () => ({
        kmakeObjects: () => queryMocks
    }),
    // KmakeObject: changeFunc,
    // Subscription:() => ({
    //     changed: changeFunc,
    // }),
    // Mutation: () => ({
    //     reset: changeFunc
    // }),
};

const resolvers = {
    Subscription: {
        changed: {
            subscribe: () => pubsub.asyncIterator([CHANGED])
    },
  },
}

const server = new ApolloServer({
    typeDefs: importSchema('schema.graphql'),
    mocks: mocks,
    resolvers: resolvers,
    debug: true,
});


function intervalFunc() {
    pubsub.publish(CHANGED, queryMocks[1]);
}

server.listen({ port: 8080 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
    setInterval(intervalFunc, 3000);

});