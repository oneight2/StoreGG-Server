var express = require("express");
var router = express.Router();
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
router.post("/create", actionCreate);
router.get("/update/:id", viewUpdate);
router.put("/actionUpdate/:id", actionUpdate);
router.delete("/delete/:id", actionDelete);

module.exports = router;
