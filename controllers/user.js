// controllers/userController.js
const User = require('../models/user');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createUser: async (req, res) => {
    const { nama, email, password, role_id } = req.body;
    try {
      const newUser = await User.create({ nama, email, password, role_id });
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { nama, email, password, role_id } = req.body;
    try {
      await User.update({ nama, email, password, role_id }, { where: { user_id: id } });
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      await User.destroy({ where: { user_id: id } });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
