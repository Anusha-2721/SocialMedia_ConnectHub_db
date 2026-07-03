console.log("✅ commentRoutes Loaded");

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    console.log("✅ TEST ROUTE HIT");
    res.json({
        success: true,
        message: "Comment Route Working"
    });
});

const {
    addComment,
    getComments
} = require("../controllers/commentController");

router.post("/addComment", addComment);
router.get("/getComments/:post_id", getComments);

module.exports = router;