// knexfile.js
module.exports = {
  client: 'mysql2',
  connection: {
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6680075',
    password: 'a58lFBG49h',
    database: 'sql6680075',
    port: 3306,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};
