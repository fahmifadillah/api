// seeders/userSeeder.js
const User = require('../models/user');

const userSeeder = async () => {
  try {
    await User.bulkCreate([
      {
        nama: 'meiysa',
        email: 'meiysa@gmail.com',
        password: 'meiysa',
        role_id: 1, // User role_id
      },
      {
        nama: 'farah',
        email: 'farah@gmail.com',
        password: 'farah',
        role_id: 2, // Admin role_id
      },
    ]);
    console.log('User seeders created successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = userSeeder;
