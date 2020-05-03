const express = require("express");
const favicon = require("express-favicon");
const connectDB = require("./config/db");
const path = require("path");
const http = require("http");

const app = express();
const server = http.Server(app);

// Connect Database
connectDB();

// Set static folder
app.use(favicon(__dirname + "/client/build/favicon.ico"));
app.use(express.static(path.join(__dirname, "client", "public")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server started in ${PORT}`));
