const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const http = require("http");

const app = express();
const server = http.Server(app);

// Connect Database
connectDB();

// Set static folder
app.use(express.static("client/public"));

app.get("/api/home", function (req, res) {
  res.json("success");
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  console.log("pass");
  // Set static folder
  app.use(express.static("client/build"));

  console.log("pass");

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`server started in ${PORT}`));
