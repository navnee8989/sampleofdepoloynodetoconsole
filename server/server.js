const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

// Serve static files from the 'views' folder
app.use(express.static(path.join(__dirname, 'client')));

// Route for home page
app.get("/", (req, res) => {
    console.log("Hits home");
    console.log("Everything is done");

    // Render the index.html page when accessing the home route
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Route for done
app.get("/done", () => {
    console.log("Hits done");
});

const PORT = process.env.PORT || 2589;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
