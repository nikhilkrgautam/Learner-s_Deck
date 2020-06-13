const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'sahilnare78',
  password: 'learner07desk08',
  host: 'localhost',
  port: 5432,
  database: 'lerdes'
});

module.exports = pool;
