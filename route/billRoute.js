var express = require("express");
var router = express.Router();
var bill = require("../controller/bill_controller");
router.post('/getUserBill', bill.getUserBill) // Function to add cars in DB
module.exports = router;