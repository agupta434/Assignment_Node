var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('registration', {
        title: 'This is my registration page'
    });
});

module.exports = router;