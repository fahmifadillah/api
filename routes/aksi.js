// routes/aksiRoutes.js
const express = require('express');
const aksiController = require('../controllers/aksi');

const router = express.Router();

router.get('/', aksiController.getAllAksi);
router.get('/:id', aksiController.getAksiById);
router.post('/', aksiController.createAksi);
router.put('/:id', aksiController.updateAksi);
router.delete('/:id', aksiController.deleteAksi);

module.exports = router;
