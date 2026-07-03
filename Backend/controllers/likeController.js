const db = require("../config/db");

// ==========================================
// LIKE / UNLIKE POST
// ==========================================

const toggleLike = (req, res) => {

    const { user_id, post_id } = req.body;

    if (!user_id || !post_id) {

        return res.status(400).json({
            success: false,
            message: "User ID and Post ID are required"
        });

    }

    const checkQuery =
        "SELECT * FROM likes WHERE user_id=? AND post_id=?";

    db.query(checkQuery, [user_id, post_id], (err, result) => {

        if (err) {

            return res.status(500).json(err);

        }

        // Unlike

        if (result.length > 0) {

            const deleteQuery =
                "DELETE FROM likes WHERE user_id=? AND post_id=?";

            db.query(deleteQuery, [user_id, post_id], (err) => {

                if (err) {

                    return res.status(500).json(err);

                }

                return res.json({

                    success: true,

                    liked: false,

                    message: "Post Unliked"

                });

            });

        }

        // Like

        else {

            const insertQuery =
                "INSERT INTO likes(user_id, post_id) VALUES(?, ?)";

            db.query(insertQuery, [user_id, post_id], (err) => {

                if (err) {

                    return res.status(500).json(err);

                }

                return res.json({

                    success: true,

                    liked: true,

                    message: "Post Liked"

                });

            });

        }

    });

};

module.exports = {
    toggleLike
};