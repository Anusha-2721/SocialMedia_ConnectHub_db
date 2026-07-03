const db = require("../config/db");

// ==========================================
// GET USER PROFILE
// ==========================================

const getProfile = (req, res) => {

    const { id } = req.params;

    const query = `
        SELECT
            id,
            full_name,
            username,
            email,
            profile_image
        FROM users
        WHERE id = ?
    `;

    db.query(query, [id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.length === 0) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        res.status(200).json({

            success: true,

            user: result[0]

        });

    });

};
// ==========================================
// UPDATE PROFILE
// ==========================================

const updateProfile = (req, res) => {

    const { id } = req.params;

    const {
        full_name,
        username,
        email
    } = req.body;

    const query = `
        UPDATE users
        SET
            full_name = ?,
            username = ?,
            email = ?
        WHERE id = ?
    `;

    db.query(

        query,

        [full_name, username, email, id],

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });

            }

            return res.status(200).json({

                success: true,

                message: "Profile Updated Successfully"

            });

        }

    );

};
// ==========================================
// UPLOAD PROFILE IMAGE
// ==========================================

const uploadProfileImage = (req, res) => {

    const { id } = req.params;

    if (!req.file) {

        return res.status(400).json({
            success: false,
            message: "No Image Uploaded"
        });

    }

    const imagePath = "/uploads/" + req.file.filename;

    const query = `
        UPDATE users
        SET profile_image = ?
        WHERE id = ?
    `;

    db.query(query, [imagePath, id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        return res.status(200).json({

            success: true,

            image: imagePath,

            message: "Profile Image Updated Successfully"

        });

    });

};
// ==========================================
// SEARCH USERS
// ==========================================

const searchUsers = (req, res) => {

    const { keyword } = req.query;

    const query = `
        SELECT
            id,
            full_name,
            username,
            profile_image
        FROM users
        WHERE
            full_name LIKE ?
            OR username LIKE ?
        LIMIT 10
    `;

    db.query(
        query,
        [`%${keyword}%`, `%${keyword}%`],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(200).json({
                success: true,
                users: result
            });

        }
    );

};

module.exports = {
    getProfile,
    updateProfile,
    uploadProfileImage,
    searchUsers
};