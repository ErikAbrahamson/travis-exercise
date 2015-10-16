var chai = require('chai'),
  chaiHttp = require('chai-http'),
  should = chai.should(),
  server = require('../server/app');


chai.use(chaiHttp);

describe('Vehicles', function() {

  it('should return a response of 200 on root', function(done) {
    chai.request(server).get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
    });

  it('should return a response of 404 on root', function(done) {
    chai.request(server).get('/')
      .end(function(err, res){
        res.should.have.status(404);
        done();
      });
    });
  });
