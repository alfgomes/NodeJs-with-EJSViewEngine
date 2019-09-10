var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', menuId: 'home' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About...', menuId: 'about' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Us', menuId: 'contact' });
});

module.exports = router;