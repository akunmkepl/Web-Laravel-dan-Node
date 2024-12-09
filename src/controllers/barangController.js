const BarangModel = require("../models/barangModel");
const ResponseHandler = require("../utils/responseHandler");

class BarangController {
  static async tambahBarang(req, res) {
    try {
      const { nama, kategori, harga, stok, kodeBarang } = req.body;
      const insertId = await BarangModel.tambahBarang(
        nama,
        kategori,
        harga,
        stok,
        kodeBarang
      );
      // Mengambil data barang yang baru ditambahkan berdasarkan insertId
      const barang = await BarangModel.ambilBarangById(insertId);
      ResponseHandler.sukses(res, 201, barang);
    } catch (error) {
      ResponseHandler.error(res, 400, error.message);
    }
  }

  static async ambilSemuaBarang(req, res) {
    try {
      console.log("Mengambil semua barang...");  // Tambahkan log ini
      const barangs = await BarangModel.ambilSemuaBarang();
      console.log(barangs);  // Log hasil query
      ResponseHandler.sukses(res, 200, barangs);
    } catch (error) {
      console.error(error);  // Log error jika ada
      ResponseHandler.error(res, 500, error.message);
    }
  }
}

module.exports = BarangController;
