const express = require("express");
require("dotenv").config();

const app = express();

// If Node < 18 uncomment this:
// const fetch = require("node-fetch");

// Serve frontend files
app.use(express.static("public"));

// API route
app.get("/api/ip", async (req, res) => {
  try {
    const response = await fetch(
      `https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching IP data"
    });
  }
});

// IMPORTANT FOR DEPLOYMENT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🔥 Running on port", PORT);
});