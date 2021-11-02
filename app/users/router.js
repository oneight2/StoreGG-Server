var express = require("express");
var router = express.Router();
const { index, actionSignin, logout } = require("./controller");

router.get("/", index);
router.post("/signin", actionSignin);
router.get("/logout", logout);

module.exports = router;
