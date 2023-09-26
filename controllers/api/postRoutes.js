const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedRows = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!deletedRows) {
            res.status(400).json({message: 'No records found with that id'})
            return;
        }
        res.status(200).json({message: "destroyed >:)"})
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;