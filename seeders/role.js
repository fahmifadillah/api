// seeders/roleSeeder.js
const Role = require('../models/role');

const roleSeeder = async () => {
  try {
    await Role.bulkCreate([
      { role_id: 1 },
      { role: 'admin' },
    ]);
    console.log('Role seeders created successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = roleSeeder;
