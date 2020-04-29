const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Define Routes
app.use("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started in ${PORT}`));
