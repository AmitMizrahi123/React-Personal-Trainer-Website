const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Set static folder
app.use(express.static(path.join(__dirname, "client", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started in ${PORT}`));
