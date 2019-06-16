'use strict';

const utils = require('../utils/writer.js');
const Cart = require('../service/CartService');

module.exports.getCart = function getCart(req, res, next) {
    const username = req.swagger.params['username'].value;
    Cart.getCart(username)
    .then(function (response) {
        res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBookFromCart = function deleteBookFromCart (req, res, next) {
    const username = req.swagger.params['username'].value;
    const bookISBN = req.swagger.params['bookISBN'].value;
    Cart.deleteBookFromCart(username, bookISBN)
    .then(function (response) {
        res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addBookInCart = function addBookInCart(req, res, next) {
    const username = req.swagger.params['username'].value;
    const bookISBN = req.swagger.params['bookISBN'].value;
    Cart.addBookInCart(username, bookISBN)
        .then(function (response) {
            utils.writeJson(res, response, 201);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
