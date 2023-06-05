// routes/role.js
const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

// Rute untuk mendapatkan semua roles
router.get('/', roleController.getAllRoles);

// Rute untuk mendapatkan role berdasarkan ID
router.get('/:id', roleController.getRoleById);

// Rute untuk membuat role baru
router.post('/', roleController.createRole);

// Rute untuk memperbarui role berdasarkan ID
router.put('/:id', roleController.updateRole);

// Rute untuk menghapus role berdasarkan ID
router.delete('/:id', roleController.deleteRole);

module.exports = router;
