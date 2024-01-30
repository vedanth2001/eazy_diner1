const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('knex');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;


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

app.use(async (req, res, next) => {
  try {
    req.db = db;
    next();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await req.db('Customers')
      .select('*')
      .where('email', email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.all('/api/login', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});