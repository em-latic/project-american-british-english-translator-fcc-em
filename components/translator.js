const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(phrase, origin) {
        let dictionary = {};
        let terms = [];

        if(origin == "american"){
            dictionary = { ...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles };
            terms = Object.keys(dictionary);
            // terms = Object.keys(americanOnly);
            // terms.concat(Object.keys(americanToBritishSpelling));
            // terms.concat(Object.keys(americanToBritishTitles));
        }
        else {
            dictionary = {...britishOnly};
            terms = Object.keys(britishOnly);
        }
        const regexDictionary = new RegExp("\\b(" + terms.join("|") + ")\\b"); //, "gi"
        const translation = phrase.replace(regexDictionary, match => dictionary[match.toLowerCase()]);

        return translation;
    }
}

module.exports = Translator;