const connection = require('../connection');
const moment = require('moment');

module.exports = {
  async createDebit(require, response) {
    const { description, value } = require.body;

    const [id] = await connection('transactions').insert({
      date: moment().format('DD/MM/YYYY'),
      description,
      value: -value,
      credit: false,
      id_bank: 2
    })

    return response.json({ id });
  }
}

