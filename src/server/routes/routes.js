
const router = require('express').Router();

router.get('/hello', (req, res) => {
  console.log('received');
  res.json('hello there');
});

router.get('/ping', function (req, res) {
 return res.send('pong');
});

module.exports = router;
