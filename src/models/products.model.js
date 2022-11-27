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
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  return { id: result.insertId, name };
};

const deleteProduct = async (productID) => { 
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [productID],
  );
};

module.exports = {
  getAllProducts,
  getProductsID,
  insertProduct,
  deleteProduct,
};