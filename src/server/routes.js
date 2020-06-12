
const express = require('express');
const router = express.Router();

router.get('/api/hello', (req, res) => {
  console.log('received');
  res.json('hello there');
});

router.get('/api/ping', function (req, res) {
 return res.send('pong');
});

module.exports = router;
