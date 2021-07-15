const {
  ApolloServer,
  gql,
  graphiqlExpress,
  AuthenticationError,
} = require("apollo-server-express");
const schema = require("./src/schema");
const resolvers = require("./src/resolvers");
const express = require("express");
// var sequelize = require("sequelize");
// var initModels = require("./models");
// var models = initModels(sequelize);
const db = require("./models");
const cors = require("cors");
const http = require("http");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const authConfig = require("./config/authConfig");
const port = 3000;

// db.sequelize.sync({ force: true }).then(async () => {
//   console.log("Drop and re-sync db.");
// });

const app = express();
app.use(cors());

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    const authUser = await getUser(req);
    // console.log(authUser);
    return {
      authUser,
    };
  },
});

const getUser = async (req) => {
  const token = req.headers["x-token"];

  if (token) {
    try {
      return await jwt.verify(token, authConfig.secret);
    } catch (e) {
      throw new AuthenticationError("your session expired");
    }
  }
  //throw new AuthenticationError("your session expired in index");
};

server.applyMiddleware({ app, path: "/graphql" });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

// server.use(
//   "/graphiql",
//   graphiqlExpress({
//     endpointURL: "graphql",
//   })
// );

// app.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });

// app.listen({ port: port }, () =>
//   console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
// );

httpServer.listen({ port: port }, () => {
  console.log(`Server ready at http://localhost:${port}/graphql`);
});
