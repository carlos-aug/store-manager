const salesService = require('../services/sales.service');

const getSales = async (_req, res) => { 
  const { type, message } = await salesService.getSales();

  if (type) return res.status(type).json(message);

  if (!message) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(message);
};

const insertSale = async (req, res) => { 
  const sale = req.body;
  const { message } = await salesService.insertSale(sale);

  return res.status(201).json({ id: message, itemsSold: sale });
};

const getSalesID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSalesID(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  getSales,
  insertSale,
  getSalesID,
};