'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const textToTranslate = req.body.text;
      const locale = req.body.locale;

      //just for initialization, no explicit check in 'Translator', just if == 'american'
      let origin = "british"; 

      if(textToTranslate == "") {
        return res.json({ error: "No text to translate" });
      }
      
      if(!textToTranslate || !locale) {
        return res.json({ error: "Required field(s) missing" });
      }
      
      if(locale === "american-to-british") {
        origin = "american";
      }
      //if not the other valid 'locale', it is error
      else if(locale !== "british-to-american") { 
        return res.json({ error: "Invalid value for locale field" });
      }

      let translation = translator.translate(textToTranslate, origin);
      //if no translation performed -> 
      if(textToTranslate == translation) {
        translation = "Everything looks good to me!";
      }
      const response = { 
        text: textToTranslate,
        translation: translation
      };

      res.json(response);
    });
};
