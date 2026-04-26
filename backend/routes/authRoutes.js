const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar (POST a /api/auth/register)
router.post('/register', authController.register);

// Ruta para loguear (POST a /api/auth/login)
router.post('/login', authController.login);

module.exports = router;