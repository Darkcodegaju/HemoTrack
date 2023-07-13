const express = require('express');
const { testr } = require('../controller/testControl.js');
// this is only router  ki functionality instll karwane ke liye


const router = express.Router();


router.get('/test' , testr);


module.exports= router;