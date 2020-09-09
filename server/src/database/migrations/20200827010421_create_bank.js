exports.up = function (knex) {
  return knex.schema.createTable('banks', function (table) {
    table.increments('id').primary();

    table.string('name').notNullable();
    table.string('account').notNullable();
    table.string('agency').notNullable();
  });
};

exports.down = function (knex) {
  return knex.screme.dropTable('banks');
};
