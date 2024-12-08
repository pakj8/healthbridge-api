const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input UserInput {
    name: String!
    age: Int!
    gender: String!
    vitals: String
    symptoms: String
    history: String
  }

  input PatientDetails {
    name: String
    age: Int
    gender: String
    vitals: String
    symptoms: String
    history: String
  }

  input FollowUpAnswersInput {
    patientDetails: PatientDetails
    questions: [String]
    answers: String
  }

  type ChatResponse {
    questions: [String!]!
    advice: String
  }

  type Query {
    getFollowUpQuestions(input: UserInput!): [String!]!
  }

  type Mutation {
    getAdvice(input: FollowUpAnswersInput): String!
  }
`;

module.exports = typeDefs;
