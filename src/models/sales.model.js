const camelize = require('camelize');
const connection = require('./connection');

const insertIdSale = async () => {
  const date = new Date();

  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );

  return { id: insertId };
};

const insertSale = async (saleId, { productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );

  return { saleId, productId, quantity };
};
  
const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT * FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p ON s.id = p.sale_id`,
  );

  return camelize(sales);
};

const getSalesID = async (salesID) => {
  const [result] = await connection.execute(
    `SELECT s.date, p.product_id, p.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p ON s.id = p.sale_id WHERE s.id = (?)`,
    [salesID],
  );

  return camelize(result);
};

module.exports = {
  insertIdSale,
  insertSale,
  getSales,
  getSalesID,
};
