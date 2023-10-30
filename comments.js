// Create web server nodejs with express

// Import express
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private





