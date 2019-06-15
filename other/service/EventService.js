'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;
const pug = require('pug');
const eventsPug = pug.compileFile(__dirname + '/../../public/pages/views/Events.pug');


/**
 * Scheduled events
 * List of scheduled events
 *
 * returns List
 **/
exports.getAllEvents = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT "idEvent", "description", "place", "nameEvent", date, "time" FROM "DescriptionEvents" order by date', (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(eventsPug({events: results.rows}));
      }
    });
  });
};


/**
 * Event where a book is presented
 * List events for a given book
 *
 * bookISBN Integer ISBN of the book
 * returns Object
 **/
exports.getBookEvent = function(bookISBN) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Events" natural join "DescriptionEvents" where isbn = ($1)', [bookISBN], (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(results.rows);
      }
    });
  });
};


/**
 * A Scheduled event
 * A specific event
 *
 * idEvent Integer is the id of the event we want to get
 * returns an Event
 **/
exports.getEvent = function (idEvent) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Events" natural join "DescriptionEvents" where "idEvent" = ($1)', [idEvent], (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(results.rows);
      }
    });
  });
};

//todo set the api to call a single event