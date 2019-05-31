'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.getAllEvents = function getAllEvents (req, res, next) {
  Event.getAllEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookEvent = function getBookEvent (req, res, next) {
  var bookISBN = req.swagger.params['bookISBN'].value;
  Event.getBookEvent(bookISBN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
