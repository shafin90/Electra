const express = require("express");
const router = express.Router();
const {accountController} = require("../controller/accountController")
const { Account } = require("../model/accountSchema")
const { responseMessages } = require("../utils/responseMessages")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();



router.post("/registration", accountController.registration);

router.post("/login", accountController.login)


module.exports = router 