var express = require('express');

var router = express.Router();

/* GET thank you page. */
router.get('/', function (req, res, next) {
  res.render('thankyou', { title: "" });
});

module.exports = router;