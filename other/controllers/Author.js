'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

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
  var authorFullName = req.swagger.params['authorFullName'].value;
  Author.getAuthorByFullName(authorFullName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
