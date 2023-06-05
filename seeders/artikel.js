// seeders/artikelSeeder.js
const Artikel = require('../models/artikel');

const artikelSeeder = async () => {
  try {
    await Artikel.bulkCreate([
      {
        image: 'image_url_1',
        url: 'url_1',
        title: 'Artikel 1',
        category: 'Category 1',
        hashtag: 'Hashtag 1',
        created_at: new Date(),
        author: 'Author 1',
        desc: 'Deskripsi Artikel 1',
      },
      {
        image: 'image_url_2',
        url: 'url_2',
        title: 'Artikel 2',
        category: 'Category 2',
        hashtag: 'Hashtag 2',
        created_at: new Date(),
        author: 'Author 2',
        desc: 'Deskripsi Artikel 2',
      },
    ]);
    console.log('Artikel seeders created successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = artikelSeeder;
