const path = require('path');
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);

app.get('/status', (req, res) => {
    res.json({
        message: "Server Tabungan Target Berjalan!",
        folderStructure: "Modular/MVC",
        maintainer: "Evan Febrian Atmadja"
    });
});

module.exports = app;