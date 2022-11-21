const connection = require('./connection');

const getAllProducts = async () => { 
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const getProductsID = async (productID) => { 
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productID],
  );

  return result;
};

const insertProduct = async (name) => { 
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
};

module.exports = {
  getAllProducts,
  getProductsID,
  insertProduct,
};