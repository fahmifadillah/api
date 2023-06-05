// seeders/aksiSeeder.js
const Aksi = require('../models/aksi');

const aksiSeeder = async () => {
  try {
    await Aksi.bulkCreate([
      {
        image: 'image_url_1',
        url: 'url_1',
        title: 'Aksi 1',
        desc: 'Deskripsi Aksi 1',
      },
      {
        image: 'image_url_2',
        url: 'url_2',
        title: 'Aksi 2',
        desc: 'Deskripsi Aksi 2',
      },
    ]);
    console.log('Aksi seeders created successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = aksiSeeder;
