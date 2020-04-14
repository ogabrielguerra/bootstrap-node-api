'use strict';

const express = require('express');
let DbManager = require('./db');
let ToyModel = require('./models/ToyModel');
let ToyController = require('./controllers/ToyController');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App Configs
const app = express();
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database
DbManager = new DbManager();
const mongoose = DbManager.getMongooseInstance();

// Toy Model and Document
ToyModel = new ToyModel();
const toysSchema = ToyModel.toySchema();
const Toys = mongoose.model('toys', toysSchema);

ToyController = new ToyController(Toys);

// Home
app.get('/', (req, res) => {
    res.send('API HOME');
});

// List All
app.get('/toys', (req, res) => {
    ToyController.list(req, res);
});

// Get by ID
app.get('/toy/:id', (req, res) => {
    ToyController.detail(req, res);
});

// Insert
app.post('/toy/add', (req, res) => {
    ToyController.add(req, res)
});

// Update 
app.put('/toy/update', (req, res) => {
    ToyController.update(req, res)
});

// Delete
app.post('/toy/delete', (req, res) => {
    ToyController.delete(req, res)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);