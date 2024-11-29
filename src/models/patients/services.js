const patientSchema = require("./schema");

exports.createPatient = async (PatientInput) => {
  console.log("Service input:", PatientInput);

  try {
    const data = await patientSchema.create(PatientInput);

    return data;
  } catch (error) {
    console.error("Error in service layer:", error);
    throw new Error("Service error: Failed to create patient");
  }
};

exports.getPatient = async (patientId) => {
  try {
    const data = await patientSchema?.findOne(patientId);
    return data;
  } catch (error) {
    console.error(error);
  }
};
