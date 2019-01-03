const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const exampleAPI = require('./datasources/example');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        exampleAPI: new exampleAPI()
    }),
    engine: {
        apiKey: process.env.ENGINE_API_KEY
    },
});

server
    .listen({ port: 777 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));