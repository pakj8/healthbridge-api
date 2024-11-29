const mongoose = require("mongoose");
const { MONGOOSE_CONSTANT } = require("../constant");

const patientSchema = new mongoose.Schema(
  {
    patientId: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(MONGOOSE_CONSTANT.PATIENT, patientSchema);
