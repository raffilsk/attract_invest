const connection = require('../connection');
const moment = require('moment');

module.exports = {
  async createCredit(require, response) {
    const { description, value } = require.body;

    const [id] = await connection('transactions').insert({
      date: moment().format('DD/MM/YYYY'),
      description,
      value,
      credit: true,
      id_bank: 1
    })

    return response.json({ id });
  }
}

