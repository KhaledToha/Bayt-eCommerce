const connection = require('../config/connections');

exports.getProductsQuery = (offset, category, sort) => {
  const arr = [offset];

  if (category !== 'all') {
    arr.push(category);
  }

  const query = `
    SELECT * FROM products
    ${category !== 'all' ? 'WHERE category = $2' : ''}
    ORDER BY ${sort || 'products.id DESC'}
    LIMIT 5 OFFSET $1
  `;
  return connection.query(query, arr);
};
