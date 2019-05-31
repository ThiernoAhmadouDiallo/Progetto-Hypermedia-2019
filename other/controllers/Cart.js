'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.cartCartIdGET = function cartCartIdGET (req, res, next) {
  var cartId = req.swagger.params['cartId'].value;
  Cart.cartCartIdGET(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBookFromCart = function deleteBookFromCart (req, res, next) {
  var cartId = req.swagger.params['cartId'].value;
  var bookISBN = req.swagger.params['bookISBN'].value;
  Cart.deleteBookFromCart(cartId,bookISBN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
