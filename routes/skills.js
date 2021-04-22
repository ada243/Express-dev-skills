//require expess
const express = require("express");
//initialize a router object
const router = express.Router();
//require teh controller module
const skillsCtrl = require("../controllers/skills")



//define our routes
//all route in this module start at /skills so the "/" used in these routes are all coming after /skills
router.get("/", skillsCtrl.index)


//export the router object
module.exports = router;