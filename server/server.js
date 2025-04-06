import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import packagesRoutes from "./routes/packages.js";
import transportRoutes from "./routes/cars.js";
import testimonialRoutes from "./routes/testimonials.js";
import teamRoutes from "./routes/teams.js";
import hotelRoutes from "./routes/hotels.js";
import boatRoutes from "./routes/boats.js";
import activityRoutes from "./routes/activities.js";
import formRoutes from "./routes/form.js";

const app = express();
const PORT = process.env.PORT || 5000;
const SELF_PING_INTERVAL = 14 * 60 * 1000; // 14 minutes

// Middleware
app.use(cors());
app.use(json());

app.use("/api/packages", packagesRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/boats", boatRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/cars", transportRoutes);
app.use("/api/form", formRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  console.log(process.env.MONGO_URI);
  res.json({ message: "API is working!" }); // Return a JSON response
});

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Self-ping every 14 minutes to keep the server alive for render
  setInterval(() => {
    axios
      .get("https://achievementtravels.onrender.com/ping")
      .then((response) => console.log("Self-ping successful:", response.status))
      .catch((error) => console.error("Self-ping failed:", error));
  }, SELF_PING_INTERVAL);
});
