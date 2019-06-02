'use strict';

const utils = require('../utils/writer.js');
const Event = require('../service/EventService');

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
    const bookISBN = req.swagger.params['bookISBN'].value;
  Event.getBookEvent(bookISBN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
