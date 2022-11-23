const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = chai;
const app = require('../../../src/app')

chai.use(chaiHttp)

describe('Testa service', function () { 
  describe('', function () {
    it('', async function () { 
  
      const products = [
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ];
  
      const response = await chai
        .request(app)
        .get('/products');
      expect(response.status).to.be.equal(200);
      // expect(response.body.products).to.deep.equal(products);
    })
  })
})