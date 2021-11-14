var express = require("express");
var router = express.Router();
const { landingPage, detailPage, category } = require("./controller");
const { isLogin } = require("../middleware/auth");
// router.use(isLogin);
/* GET home page. */
router.get("/landingPage", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);

module.exports = router;
