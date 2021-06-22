const express = require('express');
const router = express.Router();
const controller = require('../controllers/c_geo');
router.get('/', controller.get);
module.exports = router;