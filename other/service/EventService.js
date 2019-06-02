'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;

/**
 * Scheduled events
 * List of scheduled events
 *
 * returns List
 **/
exports.getAllEvents = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "DescriptionEvents"', (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(results.rows);
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

