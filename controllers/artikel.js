// controllers/artikelController.js
const Artikel = require('../models/artikel');

const artikelController = {
  getAllArtikel: async (req, res) => {
    try {
      const artikel = await Artikel.findAll();
      res.json(artikel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getArtikelById: async (req, res) => {
    const { id } = req.params;
    try {
      const artikel = await Artikel.findByPk(id);
      res.json(artikel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createArtikel: async (req, res) => {
    const { image, url, title, category, hashtag, created_at, author, desc } = req.body;
    try {
      const newArtikel = await Artikel.create({ image, url, title, category, hashtag, created_at, author, desc });
      res.json(newArtikel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateArtikel: async (req, res) => {
    const { id } = req.params;
    const { image, url, title, category, hashtag, created_at, author, desc } = req.body;
    try {
      await Artikel.update(
        { image, url, title, category, hashtag, created_at, author, desc },
        { where: { artikel_id: id } }
      );
      res.json({ message: 'Artikel updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteArtikel: async (req, res) => {
    const { id } = req.params;
    try {
      await Artikel.destroy({ where: { artikel_id: id } });
      res.json({ message: 'Artikel deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = artikelController;
