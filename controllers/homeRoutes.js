const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const { findByPk } = require('../models/Post');
const withAuth = require('../utils/auth');



//homepage
router.get('/', async (req, res) => {
    try {
        const postsData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = postsData.map((post) => post.get({ plain: true}));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

//all posts page
//use the withAuth middle ware from 20 in the activities (already defined)
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'], 
                },
                {
                    model: Comment,
                    attributes: ['user_id', 'content', 'created_at']
                }
            ]
        })
        const post = postData.get({ plain: true });
        console.log(post)
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

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