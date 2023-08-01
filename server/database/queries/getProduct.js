const connection = require('../config/connections');

exports.getProductsQuery = (offset, category, sort) => {
  const arr = [offset];

  if (category !== 'all') {
    arr.push(category);
  }

  const query = `
  SELECT 
    jsonb_build_object(
      'count', (SELECT count(*) FROM products ${category !== 'all' ? 'WHERE category = $2' : ''}),
      'products', jsonb_agg(to_jsonb(products))
    ) AS result
  FROM (
    SELECT *
    FROM products
    ${category !== 'all' ? 'WHERE category = $2' : ''}
    ORDER BY ${sort}
    LIMIT 5 OFFSET $1
  ) AS products;

  `;
  return connection.query(query, arr);
};


