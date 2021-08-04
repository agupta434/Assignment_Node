var express = require('express');
var router = express.Router();
const Contact = require('../models/contactMdl').Contact;
/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('contact', {
//         title: 'This is my contact page'
//     });
// });

/* GET all posts listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

// Show the create form
router.get('/', function (req, res, next) {
    res.render('contact');
});


router.post('/create', function (req, res, next) {
    console.log('In contact create')
    console.log(req.body);
    // const data = req.body;
    const contact = new Contact;
    contact.firstname = req.body.firstname
    contact.lastname = req.body.lastname
    contact.email = req.body.email
    contact.city = req.body.city
    contact.province = req.body.province
    contact.postalcode = req.body.postalcode
    contact.save(err => {
        if (err) {
            const errorArray = [];
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => errorArray.push(err.errors[key].message));
            return res.render("contact", {
                errors: errorArray
            });
        }
        // res.redirect("/thankyou");
        res.redirect("/thankyou");
    })

});

module.exports = router;
