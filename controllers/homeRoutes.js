const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');



//homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

//all posts page


//one post page 



//login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('login');
})

module.exports = router;