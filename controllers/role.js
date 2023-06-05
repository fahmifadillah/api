// controllers/roleController.js
const Role = require('../models/role');

const roleController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getRoleById: async (req, res) => {
    const { id } = req.params;
    try {
      const role = await Role.findByPk(id);
      res.json(role);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createRole: async (req, res) => {
    const { role } = req.body;
    try {
      const newRole = await Role.create({ role });
      res.json(newRole);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateRole: async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    try {
      await Role.update({ role }, { where: { role_id: id } });
      res.json({ message: 'Role updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteRole: async (req, res) => {
    const { id } = req.params;
    try {
      await Role.destroy({ where: { role_id: id } });
      res.json({ message: 'Role deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = roleController;
