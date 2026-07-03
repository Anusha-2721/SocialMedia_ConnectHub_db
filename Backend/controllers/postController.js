const db = require("../config/db");

// ================================
// CREATE POST
// ================================
const createPost = (req, res) => {

    const { user_id, content } = req.body;

    const image = req.file
        ? "/uploads/" + req.file.filename
        : null;

    if (!user_id || !content) {

        return res.status(400).json({
            success: false,
            message: "Content is required"
        });

    }

    const query = `
        INSERT INTO posts
        (user_id, content, image)
        VALUES (?, ?, ?)
    `;

    db.query(
        query,
        [user_id, content, image],
        (err) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(201).json({

                success: true,
                message: "Post Created Successfully"

            });

        }

    );

};
 
// ==========================================
// GET ALL POSTS
// ==========================================

const getPosts = (req, res) => {

    const query = `
        SELECT
            posts.id,
            posts.content,
            posts.image,
            posts.created_at,
            users.full_name,
            users.username,
            users.profile_image
        FROM posts
        INNER JOIN users
        ON posts.user_id = users.id
        ORDER BY posts.created_at DESC
    `;

    db.query(query, (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        return res.status(200).json({

            success: true,

            posts: result

        });

    });

};
// ==========================================
// DELETE POST
// ==========================================

const deletePost = (req, res) => {

    const { post_id } = req.params;

    const query = "DELETE FROM posts WHERE id = ?";

    db.query(query, [post_id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Post not found"
            });

        }

        return res.status(200).json({

            success: true,
            message: "Post Deleted Successfully"

        });

    });

};
// ==========================================
// EDIT POST
// ==========================================

const editPost = (req, res) => {

    const { post_id } = req.params;
    const { content } = req.body;

    if (!content) {

        return res.status(400).json({
            success: false,
            message: "Post content is required"
        });

    }

    const query = `
        UPDATE posts
        SET content = ?
        WHERE id = ?
    `;

    db.query(query, [content, post_id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Post not found"
            });

        }

        return res.status(200).json({

            success: true,
            message: "Post Updated Successfully"

        });

    });

};

module.exports = {
    createPost,
    getPosts,
    deletePost,
    editPost
};