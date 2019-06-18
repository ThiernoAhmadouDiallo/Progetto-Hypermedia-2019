'use strict';

const utils = require('../utils/writer.js');
const Author = require('../service/AuthorService');

module.exports.getAllAuthors = function getAllAuthors (req, res, next) {
  Author.getAllAuthors()
    .then(function (response) {
      //utils.writeJson(res, response);
      res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getAuthorByFullName = function getAuthorByFullName (req, res, next) {
  const authorFullName = req.swagger.params['authorFullName'].value;
  Author.getAuthorByFullName(authorFullName)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
