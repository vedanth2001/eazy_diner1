// migrations/
export const up = function (knex) {
  return knex.schema.createTable('Bookings', function (table) {
    table.increments('id').primary();
    table.integer('slot_id').unsigned().references('id').inTable('Slots');
    table.integer('customer_id').unsigned().references('id').inTable('Customers');
    table.string('customer_name');
    table.string('contact_number');
    table.date('booking_date');
    table.integer('num_guests');
    table.timestamps(true, true); // created_at and updated_at columns
  });
};

export const down = function (knex) {
  return knex.schema.dropTable('Bookings');
};
