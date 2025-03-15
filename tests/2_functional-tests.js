const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translator = new Translator();

suite('Functional Tests', () => {

    // Translation with text and locale fields: POST request to /api/translate
    // Translation with text and invalid locale field: POST request to /api/translate
    // Translation with missing text field: POST request to /api/translate
    // Translation with missing locale field: POST request to /api/translate
    // Translation with empty text: POST request to /api/translate
    // Translation with text that needs no translation: POST request to /api/translate

    //# 1 - Valid request
    test('Request Translation - Valid', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ locale: "british-to-american", text: "Hello John, the pub is open!" })
            .end((err, res) => {
                assert.equal(res.body.translation, "Hello John, the <span class=\"highlight\">bar</span> is open!");
                done();
            }
            );
    });

    //# 2 - Invalid 'locale'
    test('Request Translation - Valid', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ locale: "british-to-australian", text: "Hello mr Johnson, the pub is open!" })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: "Invalid value for locale field" });
                done();
            }
            );
    });

    //# 3 - Missing 'text' field
    test('Request Translation - Missing [text] field', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ locale: "british-to-american" })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: "Required field(s) missing" });
                done();
            }
            );
    });

    //# 4 - Missing 'locale' field
    test('Request Translation - Missing [locale] field', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ text: "Hello colourful world!" })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: "Required field(s) missing" });
                done();
            }
            );
    });

    //# 5 - Empty 'text' field
    test('Request Translation - Empty [text] field', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ locale: "british-to-american", text: "" })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: "No text to translate" });
                done();
            }
            );
    });

    //# 6 - Text without need for translation
    test('Request - Text without need for translation', (done) => {
        chai
            .request(server)
            .post('/api/translate')
            .send({ text: "Hello world!", locale: "british-to-american" })
            .end((err, res) => {
                assert.equal(res.body.translation, "Everything looks good to me!");
                done();
            }
            );
    });
});
