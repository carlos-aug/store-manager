const { expect } = require("chai");
const { getAllProducts } = require("../../../src/models/products.model");

describe("A funcão getAllProducts", function () {
  it("retorna um array", async function () {
    const products = await getAllProducts();

    expect(products).to.be.instanceOf(Array)
  });
});
