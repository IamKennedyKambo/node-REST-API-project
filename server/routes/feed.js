const express = require('express');

const {body} = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const validate = [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ];

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post('/post', validate, feedController.createPost);

router.get('/post/:postId', feedController.getPost);

router.put('/post/:postId', validate, feedController.updatePost);

router.get('/post/:postId', feedController.getPost);

router.delete('/post/:postId', feedController.deletePost);

module.exports = router;