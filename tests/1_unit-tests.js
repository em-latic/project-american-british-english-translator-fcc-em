const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

    suite('Translate to British English', () => {
        
        // Translate Mangoes are my favorite fruit. to British English
        test("1- [favorite] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("Mangoes are my favorite fruit.", "american"),
                "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
            );
        });

        // Translate I ate yogurt for breakfast. to British English
        test("2- [yogurt] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("I ate yogurt for breakfast.", "american"),
                "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
            );
        });

        // Translate We had a party at my friend's condo. to British English
        test("3- [condo] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("We had a party at my friend's condo.", "american"),
                "We had a party at my friend's <span class=\"highlight\">flat</span>."
            );
        });

        // Translate Can you toss this in the trashcan for me? to British English
        test("4- [trashcan] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("Can you toss this in the trashcan for me?", "american"),
                "Can you toss this in the <span class=\"highlight\">bin</span> for me?"
            );
        });

        // Translate The parking lot was full. to British English
        test("5- [parking lot] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("The parking lot was full.", "american"),
                "The <span class=\"highlight\">car park</span> was full."
            );
        });

        // Translate Like a high tech Rube Goldberg machine. to British English
        test("6- [Rube Goldberg] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("Like a high tech Rube Goldberg machine.", "american"),
                "Like a high tech <span class=\"highlight\">Heath Robinson device</span>."
            );
        });

        // Translate To play hooky means to skip class or work. to British English
        test("7- [play hooky] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("To play hooky means to skip class or work.", "american"),
                "To <span class=\"highlight\">bunk off</span> means to skip class or work."
            );
        });

        // Translate No Mr. Bond, I expect you to die. to British English
        test("8- [Mr.] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("No Mr. Bond, I expect you to die.", "american"),
                "No <span class=\"highlight\">Mr</span> Bond, I expect you to die."
            );
        });

        // Translate Dr. Grosh will see you now. to British English
        test("9- [Dr.] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("Dr. Grosh will see you now.", "american"),
                "<span class=\"highlight\">Dr</span> Grosh will see you now."
            );
        });

        // Translate Lunch is at 12:15 today. to British English
        test("10- [12:15] to Brit.Eng.", () => {
            assert.equal(
                translator.translate("Lunch is at 12:15 today.", "american"),
                "Lunch is at <span class=\"highlight\">12.15</span> today."
            );
        });

    }); // END of Amer -> Brit. test Suite


    suite('Translate to American', () => {

        // Translate We watched the footie match for a while. to American English
        test("11- [footie] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("We watched the footie match for a while.", "british"),
                "We watched the <span class=\"highlight\">soccer</span> match for a while."
            );
        });

        // Translate Paracetamol takes up to an hour to work. to American English
        test("12- [Paracetamol] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("Paracetamol takes up to an hour to work.", "british"),
                "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."
            );
        });

        // Translate First, caramelise the onions. to American English
        test("13- [caramelise] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("First, caramelise the onions.", "british"),
                "First, <span class=\"highlight\">caramelize</span> the onions."
            );
        });

        // Translate I spent the bank holiday at the funfair. to American English
        test("14- [bank holiday & funfair] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("I spent the bank holiday at the funfair.", "british"),
                "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>."
            );
        });

        // Translate I had a bicky then went to the chippy. to American English
        test("15- [bicky & chippie] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("I had a bicky then went to the chippy.", "british"),
                "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>."
            );
        });

        // Translate I've just got bits and bobs in my bum bag. to American English
        test("16- [bits and bobs & bum bag] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("I've just got bits and bobs in my bum bag.", "british"),
                "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."
            );
        });

        // Translate The car boot sale at Boxted Airfield was called off. to American English
        test("17- [car boot sale] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("The car boot sale at Boxted Airfield was called off.", "british"),
                "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."
            );
        });

        // Translate Have you met Mrs Kalyani? to American English
        test("18- [Mrs] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("Have you met Mrs Kalyani?", "british"),
                "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"
            );
        });

        // Translate Prof Joyner of King's College, London. to American English
        test("19- [Prof] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("Prof Joyner of King's College, London.", "british"),
                "<span class=\"highlight\">Prof.</span> Joyner of King's College, London."
            );
        });

        // Translate Tea time is usually around 4 or 4.30. to American English
        test("20- [4.30] to Amer.Eng.", () => {
            assert.equal(
                translator.translate("Tea time is usually around 4 or 4.30.", "british"),
                "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."
            );
        });

    })  // END of Brit. -> Amer. test Suite


    suite('Highlight translations', () => {
        // Highlight translation in Mangoes are my favorite fruit.
        test("21- Highlight translation: [favo(u)rite]", () => {
            assert.include(
                translator.translate("Mangoes are my favorite fruit.", "american"),
                "<span class=\"highlight\">favourite</span>"
            );
        });

        // Highlight translation in I ate yogurt for breakfast.
        test("22- Highlight translation: [yog(h)urt]", () => {
            assert.include(
                translator.translate("I ate yogurt for breakfast.", "american"),
                "<span class=\"highlight\">yoghurt</span>"
            );
        });

        // Highlight translation in We watched the footie match for a while.
        test("23- Highlight translation: [footie/football/soccer]", () => {
            assert.include(
                translator.translate("We watched the footie match for a while.", "british"),
                "<span class=\"highlight\">soccer</span>"
            );
        });

        // Highlight translation in Paracetamol takes up to an hour to work.
        test("24- Highlight translation: [Paracetamol]", () => {
            assert.include(
                translator.translate("Paracetamol takes up to an hour to work.", "british"),
                "<span class=\"highlight\">Tylenol</span>"
            );
        });

    }); // END of Highlight suite

});
