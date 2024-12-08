const { getFollowUpQuestions, getAdvice } = require("./controller");

const resolvers = {
  Query: {
    getFollowUpQuestions: (_, { input }) => {
      return getFollowUpQuestions(input);
    },
  },
  Mutation: {
    getAdvice: (_, { input }) => {
      return getAdvice(input);
    },
  },
};

module.exports = resolvers;
