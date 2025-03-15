const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const britishToAmericanTitles = {
    'mr': 'Mr.',
    'mrs': 'Mrs.',
    'ms': 'Ms.',
    'mx': 'Mx.',
    'dr': 'Dr.',
    'prof': 'Prof.'
}
const britishToAmericanSpelling = Object.fromEntries(
    Object.entries(americanToBritishSpelling)
        .map(([key, value]) => [value, key])
);

class Translator {

    translate(phrase, origin) {
        let dictionary = {};
        let terms = [];

        if(origin == "american"){
            dictionary = { ...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles };
            terms = Object.keys(dictionary);
        }
        else {
            dictionary = {...britishOnly, ...britishToAmericanSpelling, ...britishToAmericanTitles};
            terms = Object.keys(dictionary);
        }
        const regexDictionary = new RegExp("(?<!\\w)(" + terms.map(term => term.replace(".", "\\.")).join("|") + ")(?!\\w)", "gi"); 
        // removed word boundary '\\b...\\b' that prevents american honorifics, and added space between '|'

        let translation = phrase.replace(
            regexDictionary, 
            match => `<span class="highlight">${dictionary[match.toLowerCase()]}</span>`
        ); 
        //substitute time formats i.e. 10:40 -> 10.40
        if (origin == "american") {
            translation = translation.replace(
                /(?<=\s)\d{1,2}:\d{2}(?=\D)*/g,
                match => `<span class="highlight">${ match.replace(":", ".") }</span>`
            );
        }
        else {
            translation = translation.replace(
                /(?<=\s)\d{1,2}\.\d{2}(?=\D*)/g,  // '\D' (non-digit) instead of '\s' (whitespace)
                match => `<span class="highlight">${  match.replace(".", ":") }</span>`
            );
        }
        // not replacing titles? dr -> dr.

        return translation;
    }
}

module.exports = Translator;