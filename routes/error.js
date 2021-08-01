var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('error', { title: "Welcome to Travel Experts" });
});
module.exports = router;