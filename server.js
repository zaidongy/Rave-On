require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Setup the server
const app = express();
app.use(express.json());

// const items = require('');

// Connect MongoDB
mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected..."))
    .catch(console.error);

// Use Routes
const artistRoute = require("./routes/api/artists");
app.use("/api/artists", artistRoute);

// Serve static assets if in production
if ((process.env.NODE_ENV = "production")) {
    // set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Start the server
// app.listen(process.env.PORT, () =>
//     console.log(`Server started on port ${process.env.PORT}`)
// );

app.listen(5000, () => console.log("Server started on port 5000"));
