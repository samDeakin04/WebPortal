var express = require("express");
var router = express.Router();
var incident = require("../controller/incident_controller");
router.post('/getdata', incident.getUserIncident) // Function to add cars in DB
module.exports = router;