const express = require('express');
const router = express.Router();

const data = require('../data/data')
const locales = require('../data/locales')

router.get('/', function (req, res, next) {
    res.render('screens/index', {nav: data.nav, locales: locales.supported});
});

module.exports = router;
