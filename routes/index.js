const express = require('express');
const router = express.Router();

const data = require('../data/data')
const locales = require('../data/locales')
const {getTemplateDir} = require("../util/util");

const supportedLocales = require('../middleware/current-language').supported

let regexBase = "^\\/(({locales})(\\/)*){0,1}{path}$"
regexBase = regexBase.replace("{locales}", supportedLocales.join("|"))

router.get(new RegExp(regexBase.replace('{path}', '')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported
    });
});

module.exports = router;
