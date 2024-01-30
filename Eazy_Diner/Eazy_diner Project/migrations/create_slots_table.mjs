// migrations/
export const up = function (knex) {
  return knex.schema.createTable('Slots', function (table) {
    table.increments('id').primary();
    table.integer('restaurant_id').unsigned().references('id').inTable('Restaurants');
    table.time('start_time');
    table.time('end_time');
    table.integer('capacity');
    table.timestamps(true, true); // created_at and updated_at columns
  });
};

export const down = function (knex) {
  return knex.schema.dropTable('Slots');
};
