const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {  getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController, deleteHospitalController } = require('../controller/adminController');
const adminMiddleware = require('../middleware/adminMiddleware');



const router = express.Router();


// get donar 
router.get('/donar-list',authMiddleware, adminMiddleware,getDonarsListController )

// get hospital 

router.get('/hospital-list',authMiddleware, adminMiddleware,getHospitalListController )

// get organisation 

router.get('/org-list',authMiddleware, adminMiddleware,getOrgListController )

// delete donar controller

router.delete('/delete-donar/:id',authMiddleware, adminMiddleware,deleteDonarController )

// delete hospital controller

router.delete('/delete-hospital/:id',authMiddleware, adminMiddleware,deleteHospitalController )



//EXPORT

module.exports = router;