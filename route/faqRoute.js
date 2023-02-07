var express = require("express");
var router = express.Router();
var faq = require("../controller/faq_controller");
router.get('/getAllFaq', faq.getFaq) 
module.exports = router;