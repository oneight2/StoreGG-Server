var express = require("express");
var router = express.Router();
const { landingPage, detailPage } = require("./controller");
const { isLogin } = require("../middleware/auth");
// router.use(isLogin);
/* GET home page. */
router.get("/landingPage", landingPage);
router.get("/:id/detail", detailPage);

module.exports = router;
