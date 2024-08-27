const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const multer = require("multer");
const router = express.Router();


const upload = multer();
router.post('/register', upload.none(), register);
router.post('/login', upload.none(), login);
router.get('/me', protect, getMe);

module.exports = router;
