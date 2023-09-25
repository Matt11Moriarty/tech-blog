const router = require('express').Router();
// const { Post } = require('../../models');
const { Comment } = require('../../models')

//new comment made on post
router.post('/:id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.params.id
        });
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;