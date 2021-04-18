const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
chai.use(chaiHttp);
const { expect } = require('chai');

describe('search', function () {
    let initialURL;

    beforeEach(function () {
        initialURL = process.env.omdb_url;
    });

    afterEach(function () {
        process.env.omdb_url = initialURL;
    });

    it('should return error if omdb url is not set', function (done) {
        process.env.omdb_url = '';
        chai.request(server).get('/search').end(function (err, res) {
            expect(res.body.status).to.equal("ERROR");
            expect(res.body.message).to.equal("Empty OMDB url set in config");
            done();
        });
    });
});