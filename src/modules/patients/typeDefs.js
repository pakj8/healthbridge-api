const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Patient {
    _id: ID
    patientId: String
    firstName: String
    lastName: String
    createdAt: Date
  }

  input PatientInput {
    patientId: String
    firstName: String
    lastName: String
  }

  type Query {
    getPatientByPatientId(patientId: ID): Patient
  }

  type Mutation {
    createPatient(PatientInput: PatientInput): Patient
  }
`;

module.exports = typeDefs;
