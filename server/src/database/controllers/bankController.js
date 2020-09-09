const connection = require('../connection');

module.exports = {
  async create(require, response) {
    const { name, account, agency } = require.body;

    const [id] = await connection('banks').insert({
      name,
      account,
      agency
    })
    return response.json({ id });
  },

  async index(require, response) {
    const banks = await connection('banks').select('*');

    return response.json(banks);
  }
}