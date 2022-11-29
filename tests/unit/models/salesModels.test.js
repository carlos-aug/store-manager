const { expect } = require("chai");
const { getSales } = require("../../../src/models/sales.model");

describe("Testa sales models", function () {

  it("A função getSales retorna um array", async function () {
    const products = await getSales();

    expect(products).to.be.instanceOf(Array);
  });

});
