const { getProductsQuery } = require('../database/queries');
const { CustomError } = require('../helpers');

const validCategory = {
  all: 'all',
  menClothing: 'men clothing',
  womenClothing: 'women clothing',
  jewelery: 'jewelery',
  electronics: 'electronics',
  plants: 'plants',
};

const validSort = {
  id: 'id',
  name: 'name',
  price: 'price',
};

exports.getProductsController = (req, res, next) => {
  const { page, category, sort } = req.query;

  if (!page || !category || !sort || page <= 0
    || !Object.values(validSort).includes(sort)
    || !Object.values(validCategory).includes(category)) {
    throw new CustomError(406, 'Invalid Query');
  }

  getProductsQuery((page - 1) * 5, category, sort)
    .then((data) => {
      res.status(200).json({
        error: false,
        message: 'Fetch Products Successfully',
        data: data.rows[0].result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
