const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/data.json');

// Lihat Data
const getAllTransactions = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Gagal membaca database" });
        }
        
        const jsonData = JSON.parse(data);
        
        res.status(200).json(jsonData);
    });
};

// Tambah Data
const createTransaction = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Gagal membaca database" });
        }

        const transactions = JSON.parse(data);

        const newTransaction = {
            id: transactions.length + 1, 
            description: req.body.description,
            amount: parseInt(req.body.amount), 
            type: req.body.type,
            date: new Date().toISOString().split('T')[0] 
        };

        transactions.push(newTransaction);

        fs.writeFile(dataPath, JSON.stringify(transactions, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Gagal menyimpan data" });
            }
            res.status(201).json({ message: "Berhasil disimpan!", data: newTransaction });
        });
    });
};

// Hapus Data
const deleteTransaction = (req, res) => {
    const idToDelete = parseInt(req.params.id);

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: "Error membaca data" });

        let transactions = JSON.parse(data);

        const newTransactions = transactions.filter(item => item.id !== idToDelete);

        fs.writeFile(dataPath, JSON.stringify(newTransactions, null, 2), (err) => {
            if (err) return res.status(500).json({ message: "Gagal menghapus" });
            
            res.status(200).json({ message: "Data berhasil dihapus" });
        });
    });
};

module.exports = { getAllTransactions, createTransaction, deleteTransaction };