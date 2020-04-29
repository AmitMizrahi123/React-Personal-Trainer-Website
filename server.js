const express = require("express");

const app = express();

// Define Routes
app.use("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started in ${PORT}`));
