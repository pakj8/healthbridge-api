const patient = require("./patients/");

const typeDefs = [patient.typeDefs];

const resolvers = [patient.resolvers];

module.exports = { typeDefs, resolvers };
