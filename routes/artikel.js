// routes/artikelRoutes.js
const express = require('express');
const artikelController = require('../controllers/artikel');

const router = express.Router();

router.get('/', artikelController.getAllArtikel);
router.get('/:id', artikelController.getArtikelById);
router.post('/', artikelController.createArtikel);
router.put('/:id', artikelController.updateArtikel);
router.delete('/:id', artikelController.deleteArtikel);

module.exports = router;
