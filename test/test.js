let app =  require("../app");
let chai = require('chai');
let chaiHttp = require('chai-http')
let request = require("request");

chai.use(chaiHttp);
describe("Saving User", () => {
    let formData = {};
    formData.username = 'testinguser';
    formData.password = 'HArshal';
    formData.Name = 'Metha';
    formData.type = '0';
    let userID = '63e581d5e0382ee8edbbba8c';

    it('it should Save an user to DB', (done) => {
        chai.request(app)
            .post('/adminpages/adduserdata')
            .send(formData)
            .end((err, res) => {
                 
              done();
            });
      });
      it('it should Update an user to DB', (done) => {
        chai.request(app)
            .post('/adminpages/edituserdata')
            .send(userID)
            .end((err, res) => {
                 
              done();
            });
      });
  });