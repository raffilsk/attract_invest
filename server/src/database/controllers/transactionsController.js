const connection = require('../connection');
const moment = require('moment');

module.exports = {
  async index(require, response) {
    const transactions = await connection('transactions')
      .select([
        'transactions.*',
        'banks.name',
        'banks.account',
        'banks.agency'
      ])
      .join('banks', 'banks.id', '=', 'transactions.id_bank')
      .orderBy('transactions.id', 'desc')

    const total = await connection('transactions').sum({ total: 'value' });

    return response.json(transactions);
  },

  async ViewTotal(require, response) {
    const total = await connection('transactions').sum({ total: 'value' });

    return response.json(total);
  }
}

