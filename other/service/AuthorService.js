'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;
const pug = require('pug');

const authorsPug = pug.compileFile(__dirname + '/../../public/pages/views/authorLink.pug');
const bookPug = pug.compileFile(__dirname + '/../../public/pages/views/bookCard.pug');
const authorInfo = pug.compileFile(__dirname + '/../../public/pages/views/authorInfo.pug');

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
        resolve(authorsPug({authorList: results.rows}))
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
    pool.query('SELECT * FROM public."Authors" where "fullName" = ($1)', [authorFullName], (error, results1) => {
      if (error) {
        throw error
      } else {
        const author = results1.rows[0];
        pool.query('SELECT * FROM "BooksAndAuthors" natural join "Books" natural join "Authors" where "idAuthor" = ($1)', [author.idAuthor], (error, results2) => {
          if (error) {
            //TODO handle all errors
            throw error
          } else {
            resolve(authorInfo({author: author}) + bookPug({bookList: results2.rows}))
          }
        });
      }
    });
  });
};

