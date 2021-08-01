var express = require('express');
var router = express.Router();

const greetings = ["Hello!", "Hi!", "Bonjour!", "Greetings!", "Ciao!", "Hola!"];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'This is my index pagess',
    usern: 'Hello Travelers!', dt: (new Date()).toString(),
    greetings: greetings[Math.floor(Math.random() * greetings.length)]
  });
});
// console.log(Math.floor(Math.random() * greetings.length));

module.exports = router;
