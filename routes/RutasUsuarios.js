const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/register', usuarioController.register);

router.post('/login', usuarioController.loginUsuario);

router.get('/usuarios', usuarioController.getAllUsers);


module.exports = router;