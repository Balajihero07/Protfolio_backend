const express = require("express");
const { uploadContactByUser,getContactByAdmin } = require('../Controller/index.controller');

const router = express.Router();
    
router.post("/contact", uploadContactByUser);
router.get("/getcontact",getContactByAdmin)
// router.get("/get-contact", getContact);

module.exports = router;
