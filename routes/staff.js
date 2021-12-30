const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff');

router.get('/', staffController.get_staff);

router.get('/:id', staffController.get_one_staff);

//router.post /:id
//router.delete /:id

module.exports = router;