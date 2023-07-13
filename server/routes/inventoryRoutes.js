const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {inventoryController,getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController} = require('../controller/inverntroyController');

const router = express.Router();

// add inventory 

router.post('/create-inventory',authMiddleware,inventoryController)

// get all bllood report 
   
router.get('/get-inventory',authMiddleware,getInventoryController);

// get donar recrord 
router.get('/get-donar',authMiddleware,getDonarsController);

// get hospital Records 
router.get('/get-hospital',authMiddleware,getHospitalController);

// get orgnaisation orgnaisation Records 
router.get('/get-orgnaisation',authMiddleware,getOrgnaisationController);


//get orgnaisation orgnaisation Records  for hospital 
router.get('/get-orgnaisation-for-hospital',authMiddleware,getOrgnaisationForHospitalController );

// get invertry for hospital record 

router.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController );
// to get recent thired transaxntion
router.get('/get-recent-inventory' , authMiddleware, getRecentInventoryController)
    
module.exports = router;