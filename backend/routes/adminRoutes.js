const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const appointmentModel = require("../models/appointment");

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
  const appointment = await appointmentModel.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true },
  );
  res.json(appointment);
});

router.put("/cancel/:id", async (req, res) => {
  const appointment = await appointmentModel.findByIdAndUpdate(
    req.params.id,
    { status: "cancelled" },
    { new: true },
  );
  res.json(appointment);
});

router.delete("/delete/:id", async (req, res) => {
  const appointment = await appointmentModel.findByIdAndDelete(req.params.id);
  res.json(appointment);
});

module.exports = router;
