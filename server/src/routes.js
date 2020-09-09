const express = require('express');
const bankController = require('./database/controllers/bankController');
const CreditController = require('./database/controllers/CreditController');
const DebitController = require('./database/controllers/DebitController');
const transactionsController = require('./database/controllers/transactionsController');
const routes = express.Router();

routes.get('/transactions', transactionsController.index);
routes.get('/total', transactionsController.ViewTotal);

routes.post('/credit', CreditController.createCredit);

routes.post('/debit', DebitController.createDebit);


routes.get('/banks', bankController.index);

routes.post('/banks', bankController.create);

module.exports = routes;