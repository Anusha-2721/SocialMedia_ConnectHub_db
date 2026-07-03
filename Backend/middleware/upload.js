const multer = require("multer");
const path = require("path");

// Storage Configuration
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/");

    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() + path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

// Allow only images
const fileFilter = (req, file, cb) => {

    const allowedTypes =
        /jpg|jpeg|png|gif|webp/;

    const ext =
        allowedTypes.test(
            path.extname(file.originalname).toLowerCase()
        );

    const mime =
        allowedTypes.test(file.mimetype);

    if (ext && mime) {

        cb(null, true);

    } else {

        cb(new Error("Only Images Allowed"));

    }

};

module.exports = multer({

    storage,

    fileFilter

});