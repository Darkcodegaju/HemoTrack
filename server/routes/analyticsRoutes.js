const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { bloodGroupDetailsController } = require('../controller/analyticsController');

const router = express.Router();

/// get Blood Data 
router.get('/bloodGroups-data', authMiddleware, bloodGroupDetailsController)


module.exports = router;