// migrations/
export const up = function (knex) {
  return knex.schema.createTable('Customers', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.string('password'); // Hashed password should be stored (use an appropriate method)
    table.timestamps(true, true); // created_at and updated_at columns
  });
};

export const down = function (knex) {
  return knex.schema.dropTable('Customers');
};
