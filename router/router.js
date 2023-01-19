const express = require("express");
const router = express.Router();
const getquiz = require("../controller/controller");
const postquiz = require("../controller/2c");

// Set up a route to display the quiz form

router.route("/quiz").get(getquiz).post(postquiz);

module.exports = router;
