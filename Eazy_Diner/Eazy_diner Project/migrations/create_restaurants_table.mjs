// migrations
export const up = function (knex) {
  return knex.schema.createTable('Restaurants', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('image');
    table.string('location');
    table.string('cuisine_type');
    table.timestamps(true, true); // created_at and updated_at columns
  });
};

export const down = function (knex) {
  return knex.schema.dropTable('Restaurants');
};
