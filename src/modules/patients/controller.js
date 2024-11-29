const patientServices = require("../../models/patients/services");

exports.createPatient = async (PatientInput) => {
  try {
    const data = await patientServices.createPatient(PatientInput);

    return data;
  } catch (error) {
    console.error("Error in controller:", error);
    throw new Error("Controller error: Failed to create patient");
  }
};

exports.getPatientDetails = async (patientId) => {
  try {
    const data = await patientServices?.getPatient({ patientId });
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};
