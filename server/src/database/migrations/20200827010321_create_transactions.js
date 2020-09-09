exports.up = function (knex) {
  return knex.schema.createTable('transactions', function (table) {
    table.increments('id').primary();

    table.date('date').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.boolean('credit').notNullable();

    table.string('id_bank').notNullable();

    table.foreign('id_bank').references('id').inTable('banks')
  });

};

exports.down = function (knex) {
  return knex.screme.dropTable('transactions');
};
