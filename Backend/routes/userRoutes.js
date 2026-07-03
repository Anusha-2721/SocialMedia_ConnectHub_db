const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
    getProfile,
    updateProfile,
    uploadProfileImage,
     searchUsers
} = require("../controllers/userController");

router.get("/getProfile/:id", getProfile);

router.put("/updateProfile/:id", updateProfile);
router.put(
    "/uploadProfileImage/:id",
    upload.single("profileImage"),
    uploadProfileImage
);
router.get("/search", searchUsers);

module.exports = router;