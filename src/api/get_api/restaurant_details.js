// app.js or your server file
const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
const port = 8088;

app.use(cors());

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

app.get('/api/restaurants/:restaurantId', async (req, res) => {
  const restaurantId = req.params.restaurantId;

  try {
    const restaurantDetails = await db('Restaurants')
      .select('id', 'name', 'image', 'location', 'cuisine_type')
      .where('id', restaurantId)
      .first();

    if (!restaurantDetails) {
      res.status(404).json({ error: 'Restaurant not found' });
    } else {
      res.json({ restaurant: restaurantDetails });
    }
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
