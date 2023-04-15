const express = require("express");
const router = express.Router();
const { getcontacts,createcontact,getcontact,updatecontact,deletecontact} = require("./controllers/contactController")

router.route('/').get(getcontacts);

router.route('/').post(createcontact);


router.route('/:id').get(getcontact);

router.route('/:id').put(updatecontact);


router.route('/:id').delete(deletecontact);


module.exports=router;