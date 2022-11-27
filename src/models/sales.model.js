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

// const getSales = async () => {
//   const [sales] = await connection.execute(
//     'SELECT * FROM StoreManager.sales',
//   );
//   return sales;
// };

// const getSalesID = async (salesID) => {
//   const [[result]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales WHERE id = ?',
//     [salesID],
//   );

//   return result;
// };

module.exports = {
  insertIdSale,
  insertSale,
  // getSales,
  // getSalesID,
};
