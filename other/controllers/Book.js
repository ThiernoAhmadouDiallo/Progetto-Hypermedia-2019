'use strict';

const utils = require('../utils/writer.js');
const Book = require('../service/BookService');

module.exports.getAllBooks = function getAllBooks (req, res, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
  Book.getAllBooks()
    .then(function (response) {
      res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBooksByGenre = function getAllBooksByGenre (req, res, next) {
  Book.getAllBooksByGenre()
    .then(function (response) {
      res.send(response);
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


module.exports.getAllThemes = function getAllThemes(req, res, next) {
    Book.getAllThemes()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getAllGenres = function getAllGenres(req, res, next) {
    Book.getAllGenres()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBookByISBN = function getBookByISBN (req, res, next) {
  const bookISBN = req.swagger.params['bookISBN'].value;
  Book.getBookByISBN(bookISBN)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByAuthor = function getBooksByAuthor (req, res, next) {
  const bookAuthor = req.swagger.params['bookAuthor'].value;
  Book.getBooksByAuthor(bookAuthor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByGenre = function getBooksByGenre (req, res, next) {
  const bookGenre = req.swagger.params['bookGenre'].value;
  Book.getBooksByGenre(bookGenre)
    .then(function (response) {
        res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByTheme = function getBooksByTheme (req, res, next) {
  const bookTheme = req.swagger.params['bookTheme'].value;
  Book.getBooksByTheme(bookTheme)
    .then(function (response) {
        res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavoriteReadings = function getFavoriteReadings (req, res, next) {
  Book.getFavoriteReadings()
    .then(function (response) {
        res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getSimilars = function getSimilars(req, res, next) {
  const bookISBN = req.swagger.params['bookISBN'].value;
  Book.getSimilars(bookISBN)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};