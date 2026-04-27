const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

router.get('/', serviciosController.getServicios);
router.post('/', serviciosController.createServicio);

module.exports = router;