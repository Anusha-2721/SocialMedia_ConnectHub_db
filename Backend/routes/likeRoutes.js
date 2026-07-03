const express = require("express");
const router = express.Router();

const { toggleLike } = require("../controllers/likeController");

router.post("/toggleLike", toggleLike);

module.exports = router;