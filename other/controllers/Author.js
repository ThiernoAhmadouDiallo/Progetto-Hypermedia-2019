'use strict';

const utils = require('../utils/writer.js');
const Author = require('../service/AuthorService');

module.exports.getAllAuthors = function getAllAuthors (req, res, next) {
  Author.getAllAuthors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getAuthorByFullName = function getAuthorByFullName (req, res, next) {
  const authorFullName = req.swagger.params['authorFullName'].value;
  Author.getAuthorByFullName(authorFullName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getAuthorsOfABook = function getAuthorsOfABook(req, res, next) {
  const isbn = req.swagger.params['isbn'].value;
  Author.getAuthorsOfABook(isbn)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};