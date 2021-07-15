const { gql } = require("apollo-server-express");
const { GraphQLDateTime } = require("graphql-iso-date");
module.exports = gql`
  scalar Datetime

  type Post {
    id: Int!
    user: User!
    title: String!
    content: String!
    status: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  extend type Query {
    getPost(id: Int!): Post
    allPost: [Post]
  }
  extend type Mutation {
    addPost(title: String!, content: String!, status: Boolean): Post
    updatePost(title: String!, content: String!, status: Boolean): Post
  }
`;
