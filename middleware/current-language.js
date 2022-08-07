const locales = require('../data/locales')

let r = "^\/(({locales})(\\/){0,1})"
function getSupportedLocales(locales) {
    let supported = []
    for (let locale in locales.supported) {
        supported.push(locale)
    }

    r = r.replace("{locales}", supported.join("|"))

    return supported
}

const supported = getSupportedLocales(locales)
const regex = new RegExp(r);

module.exports = {
    middleware: function (req, res, next) {
        let matches = req.url.match(regex)

        let locale = locales.default
        if (matches && supported.includes(matches[2])) {
            locale = matches[2]
            req.langHref = '/'+locale
        }

        req.lang = locale
        next()
    },
    supported: supported,
    default: locales.default
}