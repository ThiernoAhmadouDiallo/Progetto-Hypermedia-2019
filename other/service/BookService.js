'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;
const pug = require('pug');

const booksPug = pug.compileFile(__dirname + '/../../public/pages/views/bookCard.pug');
const genrePug = pug.compileFile(__dirname + '/../../public/pages/views/genreList.pug')
const themePug = pug.compileFile(__dirname + '/../../public/pages/views/themeList.pug')
const authorInfoPug = pug.compileFile(__dirname + '/../../public/pages/views/authorInfo.pug')

/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * returns List
 **/
exports.getAllBooks = function() {
  return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM ("Books" natural join mainauthors) join "Authors" on "idAuthor"=idAuthor', (error, results) => {
      if (error) {
        throw error;
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * All genres of books
 * List of books available grouped by genre
 *
 * returns List
 **/
exports.getAllBooksByGenre = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Books" order by genre', (error, results) => {
      if (error) {
        // TODO order
        throw error;
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * All Books ordered by theme
 * List of books available grouped by theme
 *
 * returns List
 **/
exports.getAllBooksByTheme = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Books" order by theme', (error, results) => {
      if (error) {
        throw error;
      } else {
        resolve(results.rows);
      }
    });
  });
};


/**
 * All themes of book
 * List of themes available
 *
 * returns List of all themes
 **/
exports.getAllThemes = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT distinct theme FROM public."Books"', (error, results) => {
      if (error) {
        // TODO order
        throw error;
      } else {
        resolve(themePug({themeList: results.rows}));
      }
    });
  });
};

/**
 * All genre of book
 * List of genres available
 *
 * returns List of all genres
 **/
exports.getAllGenres = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT distinct genre FROM public."Books"', (error, results) => {
      if (error) {
        // TODO order
        throw error;
      } else {
        resolve(genrePug({genreList: results.rows}));
      }
    });
  });
};


/**
 * Find bestsellers
 * Returns a set of Books
 *
 * returns List
 **/
exports.getBestSellers = function() {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Books" order by sold desc limit 5', (error, results) => {
      if (error) {
        throw error;
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * Find a book by its ISBN
 * Returns a book
 *
 * bookISBN String ISBN of book to return
 * returns Book
 **/
exports.getBookByISBN = function(bookISBN) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Books" where isbn = ($1)', [bookISBN], (error, results) => {
      if (error) {
        throw error;
      } else {
        console.log(results.rows)
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * Find books by Author
 * Returns a set of Books
 *
 * bookAuthor String Author of set of books to return
 * returns List
 **/
exports.getBooksByAuthor = function(bookAuthor) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Books" natural join "BooksAndAuthors" natural join "Authors" where "fullName" = ($1)', [bookAuthor], (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};



/**
 * Find books by Genre
 * Returns set of Books
 *
 * bookGenre String Genre of set of books to return
 * returns List
 **/
exports.getBooksByGenre = function(bookGenre) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Books" natural join mainauthors join "Authors" on mainauthors.idauthor = "Authors"."idAuthor" where genre = ($1)', [bookGenre], (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * Find books by Theme
 * Returns a set of Books
 *
 * bookTheme String Theme of set of books to return
 * returns List
 **/
exports.getBooksByTheme = function(bookTheme) {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Books" natural join mainauthors join "Authors" on mainauthors.idauthor = "Authors"."idAuthor" where theme = ($1)', [bookTheme], (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * Find favorite readings
 * Returns a set of Books
 *
 * returns List
 **/
exports.getFavoriteReadings = function() {
  return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM (public."Books" join mainauthors on "Books".isbn=mainauthors.isbn) join "Authors" on "idAuthor"=idauthor order by "favorites" desc limit 5', (error, results) => {
      if (error) {
        throw error;
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};


/**
 * Find similar books
 * Returns a set of Books
 *
 * returns List
 **/
exports.getSimilars = function (isbn) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Books" where theme = (SELECT theme from "Books" where isbn = ($1)) order by theme ', [isbn], (error, results) => {
      if (error) {
        throw error;
      } else {
        resolve(booksPug({bookList: results.rows}));
      }
    });
  });
};