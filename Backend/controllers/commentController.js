const db = require("../config/db");

// ==========================================
// ADD COMMENT
// ==========================================

const addComment = (req, res) => {

    const { user_id, post_id, comment } = req.body;

    if (!user_id || !post_id || !comment) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    const query = `
        INSERT INTO comments(user_id, post_id, comment)
        VALUES(?, ?, ?)
    `;

    db.query(query, [user_id, post_id, comment], (err) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        return res.status(201).json({

            success: true,

            message: "Comment Added Successfully"

        });

    });

};
// ==========================================
// GET COMMENTS BY POST ID
// ==========================================
const getComments = (req, res) => {

    const { post_id } = req.params;

    const query = `
        SELECT
            comments.id,
            comments.comment,
            comments.created_at,
            users.full_name,
            users.username
        FROM comments
        INNER JOIN users
        ON comments.user_id = users.id
        WHERE comments.post_id = ?
        ORDER BY comments.created_at ASC
    `;

    db.query(query, [post_id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        res.status(200).json({
            success: true,
            comments: result
        });

    });

};

module.exports = {
    addComment,
    getComments
};