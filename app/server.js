'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const DbManager = require('./DbManager');
const ToyModel = require('./models/ToyModel');
const ToyController = require('./controllers/ToyController');
const Routes = require('./routes/Routes');

let mongooseInst = new DbManager(Mongoose);
let ToyModelInst = new ToyModel();
let toyControllerInst = new ToyController(
    mongooseInst.model('toys', ToyModelInst.toySchema()));

// App Configs
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routeConfigs = {
    "app": app, 
    "toyController": toyControllerInst
};

new Routes(routeConfigs)

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
