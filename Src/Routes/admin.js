const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.json({
            success: true,
            token
        });
    }

    return res.status(401).json({ success: false, message: "Invalid credentials" });
});

module.exports = router;
