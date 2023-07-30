const { getProductsQuery } = require('../database/queries');
const { CustomError } = require('../helpers');

exports.getProductsController = (req, res, next) => {
  const { page, category, sort } = req.query;

  if (!page || !category || !sort || page <= 0) {
    throw new CustomError(406, 'Invalid Query');
  }

  getProductsQuery((page - 1) * 5, category, sort)
    .then((data) => {
      res.status(200).json({
        error: false,
        message: 'Fetch Products Successfully',
        data: data.rows,
      });
    })
    .catch((err) => {
      next(err);
    });
};
