const serviceModel = require('../models/sales.model');

const getSales = async () => { 
  const sales = await serviceModel.getSales();

  return { type: null, message: sales };
};

const getSalesID = async (id) => {
  const salesID = await serviceModel.getSalesID(id);  

  return { type: null, message: salesID };
};

const insertSale = async (sale) => { 
  const { id } = await serviceModel.insertIdSale();
  await Promise.all(sale.map(async (s) => serviceModel.insertSale(id, s)));

  //  const result = await serviceModel.insertSale(sale);

   return { type: 201, message: id };
};

module.exports = {
  getSales,
  getSalesID,
  insertSale,
};