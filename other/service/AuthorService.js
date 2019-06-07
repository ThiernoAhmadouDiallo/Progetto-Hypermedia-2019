'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;
const pug = require('pug');

const pugFile = pug.compileFile(__dirname + '/../../public/pages/views/authorLink.pug');

/**
 * All authors
 * List of authors
 *
 * returns List
 **/
exports.getAllAuthors = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Authors" order by "fullName"', (error, results) => {
      if (error) {
        throw error;
      } else {
        //resolve(results.rows);
        resolve(pugFile({authorList: results.rows}))
      }
    });
  });
};


/**
 * Find authors by Name
 * Return informations about Authors
 *
 * authorFullName String Name of author to return
 * returns List
 **/
exports.getAuthorByFullName = function(authorFullName) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Authors" where "fullName" = ($1)', [authorFullName], (error, results) => {
      if (error) {
        //TODO handle all errors
        throw error
      } else {
        resolve(results.rows);
      }
    });
  });
};


/**
 * Find authors by Isbn
 * Return informations about Authors of a book
 *
 * isbn String isbn of the book
 * returns List
 **/
exports.getAuthorsOfABook = function (isbn) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Authors" natural join "BooksAndAuthors" where isbn = ($1)', [isbn], (error, results) => {
      if (error) {
        //TODO handle all errors
        throw error
      } else {
        resolve(results.rows);
      }
    });
  });
};

