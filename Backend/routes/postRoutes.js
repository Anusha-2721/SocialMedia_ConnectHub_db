const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
    createPost,
    getPosts,
    deletePost,
    editPost
} = require("../controllers/postController");
// Create Post
router.post(
    "/createPost",
    upload.single("image"),
    createPost
);
router.get("/getPosts", getPosts);
router.delete("/deletePost/:post_id", deletePost);
router.put("/editPost/:post_id", editPost);
module.exports = router;