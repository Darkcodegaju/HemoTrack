const express = require('express');
const {registerController,loginController,currentUserController} = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


// routes for register 
router.post('/register',registerController );
// route for login 
router.post('/login',loginController);


// Get current user || GET
router.get('/current-user', authMiddleware, currentUserController);


module.exports = router;