const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// Jalur Lihat Data
router.get('/transactions', apiController.getAllTransactions);

// Jalur Tambah Data
router.post('/transactions', apiController.createTransaction);

// Jalur Hapus Data
router.delete('/transactions/:id', apiController.deleteTransaction);

module.exports = router;