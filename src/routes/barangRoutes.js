const express = require('express');
const BarangController = require('../controllers/barangController');
const router = express.Router();

router.post('/', BarangController.tambahBarang);
router.get('/', BarangController.ambilSemuaBarang);

module.exports = router;