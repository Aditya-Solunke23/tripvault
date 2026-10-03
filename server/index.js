const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");


// Load environment variables
dotenv.config();


// Create Express application
const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


// ========================================
// BASIC TEST ROUTE
// ========================================

app.get("/", (req, res) => {
  res.json({
    message: "TripVault API is running",
  });
});


// ========================================
// AUTH ROUTES
// ========================================

app.use("/api/auth", authRoutes);


// ========================================
// DATABASE + SERVER
// ========================================

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB connected successfully"
    );

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });

  })
  .catch((error) => {

    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  });