// const express = require("express");
// const { uploadContactByUser,getContactByAdmin } = require('../Controller/index.controller');

// const router = express.Router();
    
// router.post("/contact", uploadContactByUser);
// router.get("/getcontact",getContactByAdmin)
// // router.get("/get-contact", getContact);

// module.exports = router;
const express = require('express');
const router = express.Router();
const adminAuth = require("../Middleware/adminauth");
// const { getAllMessages, saveMessage } = require('../Controllers/contact.controller');
const { uploadContactByUser,getContactByAdmin,deletemessage } = require('../Controller/index.controller');

// Public route → Save contact
router.post('/add', uploadContactByUser);

// Protected route → Only YOU (admin) can view messages
router.get('/get', adminAuth, getContactByAdmin);

// router.post('/delete/' ,adminAuth,deletemessage)

module.exports = router;
