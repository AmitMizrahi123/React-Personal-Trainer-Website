const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Define Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/public/index.html"), {}, function (
    err
  ) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log("Sent:");
    }
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started in ${PORT}`));
