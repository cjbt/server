// Update with your config settings.
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/designhub.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
