const chai = require("chai");
const chaiHttp = require("chai-http");
const sinonChai = require("sinon-chai");
const { expect } = chai;
const sinon = require("sinon");
chai.use(chaiHttp);
chai.use(sinonChai);
const app = require("../../../src/app");
const {
  allProductsResponse,
  productSearchNameResponse,
} = require("../../../__tests__/_dataMock");
const connection = require("../../../src/models/connection");
const productService = require("../../../src/services/products.service");
const productController = require("../../../src/controllers/products.controller");


describe("Testa product controllers", function () {
  afterEach(sinon.restore);

  it("método GET", async function () {
    sinon.stub(connection, "execute").resolves([allProductsResponse]);
    const { body, status } = await chai.request(app).get("/products");

    expect(status).to.be.deep.equal(200);
    expect(body).to.be.deep.equal(allProductsResponse);
  });

  it("retornar com id único", async function () {
    sinon.stub(connection, "execute").resolves([productSearchNameResponse]);
    const { body, status } = await chai.request(app).get("/products/1");

    expect(status).to.be.deep.equal(200);
    expect([body]).to.be.deep.equal(productSearchNameResponse);
  });

  it("se o id não existir retornar 404", async function () {
    sinon.stub(connection, "execute").resolves([[]]);
    const { body, status } = await chai.request(app).get("/products/4");

    expect(status).to.be.deep.equal(404);
    expect(body).to.be.deep.equal({ message: "Product not found" });
  });

  // it("deve inserir um novo produto", async function () {
  //   const res = {};
  //   const req = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productService, "insertProduct").resolves(4);
  //   sinon
  //     .stub(productService, "getProductsID")
  //     .resolves({ name: "Martelo de Thor" });
  //   await productController.insertProduct(req, res)
    
  //   expect(res.status).to.calledWith(201);
  //   expect(res.json).to.calledWith({ name: "Martelo de Thor" });
  // });
});
