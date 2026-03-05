const express = require("express");
const router = express.Router();
const appointmentModel = require("../models/appointment");
const sendEmail = require("../utils/sendEmail");
//
// router.post("/", async (req, res) => {
//   // res.json(req.body);
//   try {
//     //const { name, email, number, message } = req.body;
//     const newAppointment = await appointmentModel.create(req.body);
//     await sendEmail({
//       to: process.env.CLINIC_EMAIL,
//       subject: "New Appointment Booked",
//       html: `
//         <h3>New Appointment Detail</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Phone:</strong> ${number}</p>
//         <p><strong>Email:</strong> ${email || "Not provided"}</p>
//         <p><strong>Date:</strong> ${new Date(date).toLocaleString()}</p>
//         <p><strong>Reason:</strong> ${message || "Not provided"}</p>
//       `,
//     });
//     res.status(201).json(newAppointment);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }

//   // try {
//   //   const { name, number, email, date, message } = req.body;

//   //   if (!name || !number || !date) {
//   //     res.status(400).send("required field are missing");
//   //   }
//   //   await new appointmentModel.create({ name, number, email, date, message });
//   //   res.status(201).json({
//   //     success: true,
//   //     message: "Appointment booked successfully",
//   //   });
//   // } catch (error) {console.log(error);
//   //   res.status(500).json({ success: false, message: "Server error" });}
// });

router.post("/", async (req, res) => {
  console.log("body received", req.body);

  try {
    const { name, phone, email, date, message } = req.body;

    if (!name || !phone || !date) {
      return res.status(400).send("Required fields missing");
    }

    console.log("Saving to MongoDB...");

    const appointment = await appointmentModel.create({
      name,
      phone,
      email,
      date,
      message,
    });

    console.log("Saved to MongoDB:", appointment);

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
    });
    
    sendEmail({
      to: process.env.CLINIC_EMAIL,
      subject: "New Appointment Booked",
      html: `
<div style="font-family: Arial, sans-serif; background:#f6f6f6; padding:30px">
  <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:10px">

    <h2 style="color:#2c7be5;">🏥 New Appointment Booked</h2>

    <p style="color:#555;">A new patient has booked an appointment.</p>

    <hr/>

    <p><strong>Patient Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email || "Not provided"}</p>
    <p><strong>Date:</strong> ${new Date(date).toLocaleString()}</p>
    <p><strong>Reason:</strong> ${message || "Not provided"}</p>

    <hr/>

    <p style="font-size:12px;color:#999">
      This email was automatically generated from your clinic website.
    </p>

  </div>
</div>
`,
    });
  } catch (error) {
    console.log("ERROR OCCURRED:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const appointments = await appointmentModel.find();
//     res.status(201).json(appointments);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

module.exports = router;
