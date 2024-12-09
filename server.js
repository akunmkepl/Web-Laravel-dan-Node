const express = require('express');
const app = express();
require('dotenv').config();
const barangRoutes = require('./src/routes/barangRoutes');

app.use(express.json());
app.use('/api/barang', barangRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
