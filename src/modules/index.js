const patient = require("./patients/");
const OpenAI = require("./chatgpt");

const typeDefs = [patient.typeDefs, OpenAI?.typeDefs];

const resolvers = [patient.resolvers, OpenAI?.resolvers];

module.exports = { typeDefs, resolvers };
