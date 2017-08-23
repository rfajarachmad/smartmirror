var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/w_and_t', function (req, res, next) {
  res.render('weather-time', {});
});

router.get('/stats', function (req, res, next) {
  res.render('stats', {});
});

router.get('/ann', function (req, res, next) {
  res.render('ann', {});
});

router.get('/voteus', function (req, res, next) {
  res.render('voteus', {});
});




module.exports = router;