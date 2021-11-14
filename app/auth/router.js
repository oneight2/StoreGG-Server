var express = require("express");
var router = express.Router();
const { signup } = require("./contoller");
const multer = require("multer");
const os = require("os");
// const { isLogin } = require("../middleware/auth");
// router.use(isLogin);
/* GET home page. */
router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signup);

module.exports = router;
