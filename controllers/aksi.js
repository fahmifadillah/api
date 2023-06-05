// controllers/aksiController.js
const Aksi = require('../models/aksi');

const aksiController = {
  getAllAksi: async (req, res) => {
    try {
      const aksi = await Aksi.findAll();
      res.json(aksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAksiById: async (req, res) => {
    const { id } = req.params;
    try {
      const aksi = await Aksi.findByPk(id);
      res.json(aksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createAksi: async (req, res) => {
    const { image, url, title, desc } = req.body;
    try {
      const newAksi = await Aksi.create({ image, url, title, desc });
      res.json(newAksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAksi: async (req, res) => {
    const { id } = req.params;
    const { image, url, title, desc } = req.body;
    try {
      await Aksi.update({ image, url, title, desc }, { where: { aksi_id: id } });
      res.json({ message: 'Aksi updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAksi: async (req, res) => {
    const { id } = req.params;
    try {
      await Aksi.destroy({ where: { aksi_id: id } });
      res.json({ message: 'Aksi deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = aksiController;
