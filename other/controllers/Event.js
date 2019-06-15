'use strict';

const utils = require('../utils/writer.js');
const Event = require('../service/EventService');

module.exports.getAllEvents = function getAllEvents (req, res, next) {
  Event.getAllEvents()
    .then(function (response) {
        res.send(response);
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


module.exports.getEvent = function getEvent(req, res, next) {
    const idEvent = req.swagger.params['idEvent'].value;
    Event.getEvent(idEvent)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
