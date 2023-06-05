const express = require('express');
const app = express();
const db = require('./config/database');
const roleRoutes = require('./routes/role');
const userRoutes = require('./routes/user');
const aksiRoutes = require('./routes/aksi');
const artikelRoutes = require('./routes/artikel');

app.use(express.json());

// Routes
app.use('/api/roles', roleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/aksi', aksiRoutes);
app.use('/api/artikel', artikelRoutes);

const PORT = process.env.PORT || 3000;
db.authenticate()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = app;
