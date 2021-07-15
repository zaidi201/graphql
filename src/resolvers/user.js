"use strict";

const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
// var initModels = require("../../models/init-models");
// var models = initModels(sequelize);
const db = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var config = require("../../config/authConfig");

module.exports = {
  Query: {
    async allUsers() {
      return await db.user.findAll();
    },
    async getuser(_, { id }, { authUser }) {
      if (!authUser) throw new AuthenticationError("your session expired");
      return await db.user.findOne({ where: { id: id } });
    },
  },
  Mutation: {
    async login(_, { email, password }) {
      let user = await db.user.findOne({
        where: { email: email },
      });
      if (!user) {
        throw new Error("no email found");
      }
      // const valid = await bcrypt.compare(password, user.password);
      //   if (!valid) {
      //     throw new Error("no password found");
      //   }
      //
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        config.secret,
        { expiresIn: config.expires }
      );
      return { user, token };
    },

    async createUser(_, { email, password, firstName, lastName }) {
      const user = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };
      const a = await db.user.create(user);

      return a;
    },

    async updateUser(_, { id, firstName, lastName }, { authUser }) {
      if (!authUser) {
        throw new Error("login first");
      }
      const user = await db.user.findById(id);
      if (!user) {
        throw new Error("no user found");
      }
      await user
        .update({ firstName, lastName })
        .then((num) => {
          if (num == 1) {
            return user;
          } else {
            throw new Error("cant update");
          }
        })
        .catch((err) => {
          throw new Error("cant update 2");
        });
    },
  },
};
