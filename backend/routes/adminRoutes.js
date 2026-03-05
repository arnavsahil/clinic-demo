const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const appointmentModel = require("../models/appointment");
const sendEmail = require("../utils/sendEmail");

const adminUser = {
  username: "admin",
  passwordHash: bcrypt.hashSync("admin123", 10),
};

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (
    username === adminUser.username &&
    bcrypt.compareSync(password, adminUser.passwordHash)
  ) {
    //creation of jwt
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    //res.json({token:token}) -- used for testing

    //if token is generated then cookie is created
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login Successful" });
  }
  res.status(401).json({ message: "Invalid Credentials" });
});

router.get("/", async (req, res) => {
  const appointments = await appointmentModel.find().sort({ createdAt: -1 });
  res.json(appointments);
});

router.put("/approve/:id", async (req, res) => {
  try {
    const appointment = await appointmentModel.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    await sendEmail({
      to: appointment.email,
      subject: "Appointment Approved ✅",
      html: `
        <h2>Hello ${appointment.name}</h2>
        <p>Your appointment has been <b>approved</b>.</p>
        <p><b>Date:</b> ${appointment.date}</p>
        <p>We look forward to seeing you at the clinic.</p>
      `,
    });

    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error approving appointment" });
  }
});

router.put("/cancel/:id", async (req, res) => {
  try {
    const appointment = await appointmentModel.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    await sendEmail({
      to: appointment.email,
      subject: "Appointment Cancelled ❌",
      html: `
        <h2>Hello ${appointment.name}</h2>
        <p>Your appointment scheduled on <b>${appointment.date}</b> has been cancelled.</p>
        <p>Please contact the clinic if you want to reschedule.</p>
      `,
    });

    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error cancelling appointment" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const appointment = await appointmentModel.findByIdAndDelete(req.params.id);
  res.json(appointment);
});

module.exports = router;
