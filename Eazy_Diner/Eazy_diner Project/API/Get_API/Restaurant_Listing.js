// server-listing.js
const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
const port = process.env.PORT || 5000;

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

app.use(cors()); // Enable CORS for all routes

app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await db('Restaurants').select('*');
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/restaurants/:restaurantId/slots', async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const slots = await db('Slots').where('restaurant_id', restaurantId).select('*');
    res.json(slots);
  } catch (error) {
    console.error('Error fetching slots:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Listing Server is running on port ${port}`);
});
