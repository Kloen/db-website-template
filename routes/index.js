const express = require('express');
const router = express.Router();

const data = require('../data/data')
const locales = require('../data/locales')
const {getTemplateDir} = require("../util/util");

router.get('/', function (req, res, next) {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        nav: data.nav,
        locales: locales.supported
    });
});

module.exports = router;
