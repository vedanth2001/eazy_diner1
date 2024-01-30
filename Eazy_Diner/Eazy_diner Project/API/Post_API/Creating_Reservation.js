const express = require('express');
const knex = require('knex');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;


const db = knex({
  client: 'mysql2',
  connection: {
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6680075',
    password: 'a58lFBG49h',
    database: 'sql6680075',
    port: 3306,
  },
});

app.use(bodyParser.json());

app.post('/api/reservations', async (req, res) => {
  try {
    const {
      slot_id,
      customer_id,
      customer_name,
      contact_number,
      booking_date,
      num_guests,
    } = req.body;

    const [reservationId] = await db('Bookings')
      .insert({
        slot_id,
        customer_id,
        customer_name,
        contact_number,
        booking_date,
        num_guests,
      });

    res.json({ message: 'Reservation created successfully', reservationId });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.all('/api/reservations', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
