'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.getAllBooks = function getAllBooks (req, res, next) {
  Book.getAllBooks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBooksByGenre = function getAllBooksByGenre (req, res, next) {
  Book.getAllBooksByGenre()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBooksByTheme = function getAllBooksByTheme (req, res, next) {
  Book.getAllBooksByTheme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBestSellers = function getBestSellers (req, res, next) {
  Book.getBestSellers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookByISBN = function getBookByISBN (req, res, next) {
  var bookISBN = req.swagger.params['bookISBN'].value;
  Book.getBookByISBN(bookISBN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByAuthor = function getBooksByAuthor (req, res, next) {
  var bookAuthor = req.swagger.params['bookAuthor'].value;
  Book.getBooksByAuthor(bookAuthor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByGenre = function getBooksByGenre (req, res, next) {
  var bookGenre = req.swagger.params['bookGenre'].value;
  Book.getBooksByGenre(bookGenre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByTheme = function getBooksByTheme (req, res, next) {
  var bookTheme = req.swagger.params['bookTheme'].value;
  Book.getBooksByTheme(bookTheme)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavoriteReadings = function getFavoriteReadings (req, res, next) {
  Book.getFavoriteReadings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};