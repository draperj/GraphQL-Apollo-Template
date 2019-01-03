const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  example(keyWord: String): [Example!]!
}

type Example {
    id: ID   
}
`

module.exports = typeDefs;