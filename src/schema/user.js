const { gql } = require("apollo-server-express");
const { GraphQLDateTime } = require("graphql-iso-date");

module.exports = gql`
  scalar DateTime

  type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  extend type Query {
    getuser(id: Int!): User
    allUsers: [User]
  }
  extend type Mutation {
    login(email: String!, password: String!): String
    createUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User
    updateUser(
      id: Int!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User
  }
`;
