const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");
connectDB();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());   // ← VERY IMPORTANT
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // allow all origins

app.use("/", appointmentRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`SERVER is running on port: ${PORT}`);
});
