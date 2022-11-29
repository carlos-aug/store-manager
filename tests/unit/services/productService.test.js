const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = chai;
const app = require('../../../src/app')

chai.use(chaiHttp)

describe('Testa product services', function () { 
  
  it('método GET', async function () {
    const response = await chai
        .request(app)
        .get('/products');
      expect(response.status).to.be.equal(200);
  })

  it("método POST", async function () {
    const response = await chai.request(app).get("/products");
    expect(response.status).to.be.equal(200);
  });
  
})