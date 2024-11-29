const patientController = require("./controller");

const resolver = {
  Query: {
    async getPatientByPatientId(_, { patientId }) {
      return await patientController?.getPatientDetails(patientId);
    },
  },
  Mutation: {
    async createPatient(_, { PatientInput }) {
      return await patientController?.createPatient(PatientInput);
    },
  },
};

module.exports = resolver;
