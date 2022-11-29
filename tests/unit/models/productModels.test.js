const { expect } = require("chai");
const productsModel = require("../../../src/models/products.model");

describe("Testa product models", function () {
  
  it("A função getAllProducts retorna um array", async function () {
    const products = await productsModel.getAllProducts();

    expect(products).to.be.instanceOf(Array);
  });

  // it('A função getProductsID retorna o id', async function () {
  //   const idProduct = await productsModel.getProductsID()

  //   expect(idProduct).to.be.equal(1)
  // })

});
