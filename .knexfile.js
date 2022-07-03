
require('dotenv').config()

// Update with your config settings.
require('dotenv').config()
const { database: config } = require('./src/config')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = config
