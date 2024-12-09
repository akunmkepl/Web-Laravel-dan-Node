const pool = require('../config/database'); // Import koneksi pool MySQL

class BarangModel {
  static tambahBarang(nama, kategori, harga, stok, kodeBarang) {
    const query = `
      INSERT INTO barang (nama, kategori, harga, stok, kode_barang) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [nama, kategori, harga, stok, kodeBarang];
    
    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId); // Mengembalikan ID dari data yang ditambahkan
      });
    });
  }

  static ambilSemuaBarang() {
    const query = 'SELECT * FROM barang';

    return new Promise((resolve, reject) => {
      pool.query(query, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  static ambilBarangById(id) {
    const query = 'SELECT * FROM barang WHERE id = ?';

    return new Promise((resolve, reject) => {
      pool.query(query, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]); // Mengembalikan satu objek barang
      });
    });
  }

  static updateBarang(id, data) {
    const { nama, kategori, harga, stok, kodeBarang } = data;
    const query = `
      UPDATE barang 
      SET nama = ?, kategori = ?, harga = ?, stok = ?, kode_barang = ? 
      WHERE id = ?
    `;
    const values = [nama, kategori, harga, stok, kodeBarang, id];

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows); // Mengembalikan jumlah baris yang diperbarui
      });
    });
  }

  static hapusBarang(id) {
    const query = 'DELETE FROM barang WHERE id = ?';

    return new Promise((resolve, reject) => {
      pool.query(query, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows); // Mengembalikan jumlah baris yang dihapus
      });
    });
  }
}

module.exports = BarangModel;
