const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const database = require('./Src/Db_connection/Database');
require("dotenv").config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('The port is running');
});

const contactrouter = require('./Src/Routes/index.routes');
app.use("/contactw", contactrouter);

// Start server
app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);

    try {
        const result = await database.query("SELECT NOW()");
        console.log("Connected to Neon PostgreSQL:", result.rows[0]);
    } catch (err) {
        console.error("Database connection error:", err);
    }
});
