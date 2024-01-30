const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('knex');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

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

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [userId] = await db('Customers')
      .insert({
        name,
        email,
        password: hashedPassword,
      });

    res.json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.all('/api/signup', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});