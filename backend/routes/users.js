var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(400)
    res.send({
      message: 'email or password can not be blank',
      errCode: 400001
    })
    return
  }
  //TODO: validation
  res.send({
    message: 'success',
    errCode: 0
  })
});
module.exports = router;
