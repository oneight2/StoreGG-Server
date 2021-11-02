var express = require("express");
var router = express.Router();
const multer = require("multer");
const os = require("os");
const {
  index,
  actionCreate,
  viewUpdate,
  actionUpdate,
  actionDelete,
} = require("./controller");
const { isLogin } = require("../middleware/auth");
router.use(isLogin);
/* GET home page. */
router.get("/", index);
router.post(
  "/create",
  multer({ dest: os.tmpdir() }).single("thumbnail"),
  actionCreate
);
router.get("/update/:id", viewUpdate);
router.put(
  "/actionUpdate/:id",
  multer({ dest: os.tmpdir() }).single("thumbnail"),
  actionUpdate
);
router.delete("/delete/:id", actionDelete);

module.exports = router;
