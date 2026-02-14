const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: String,
    number: String,
    email: String,
    date: Date,
    message: String,
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const appointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = appointmentModel;
