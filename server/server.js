const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

// Serve static files from the client folder
const clientPath = path.join(__dirname, "..", "client");
console.log("Serving static files from:", clientPath);
app.use(express.static(clientPath));

// Home route
app.get("/", (req, res) => {
    console.log("Hits home");
    res.sendFile(path.join(clientPath, "index.html"));
});

// Done route
app.get("/done", (req, res) => {
    console.log("Hits done");
    res.send("Done route hit!");
});

const PORT = process.env.PORT || 2589;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
