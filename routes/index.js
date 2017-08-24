var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ra');
});

router.get('/ra', function (req, res, next) {
  res.render('ra', {});
});

router.get('/pt', function (req, res, next) {
  res.render('pt', {});
});

router.get('/pl', function (req, res, next) {
  res.render('pl', {});
});

router.get('/cdc', function (req, res, next) {
  res.render('cdc', {});
});

router.get('/ann', function (req, res, next) {
  res.render('ann', {});
});

router.get('/stats', function (req, res, next) {
  res.render('stats', {});
});

router.get('/w_and_t', function (req, res, next) {
  res.render('weather-time', {});
});

router.get('/hay', function (req, res, next) {
  res.render('hay');
});

module.exports = router;