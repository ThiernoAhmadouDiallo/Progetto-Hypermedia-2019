'use strict';

var dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;

/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * returns List
 **/
exports.getAllBooks = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * All genres of books
 * List of books available grouped by genre
 *
 * returns List
 **/
exports.getAllBooksByGenre = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * All Themes of books
 * List of books available grouped by theme
 *
 * returns List
 **/
exports.getAllBooksByTheme = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find bestsellers
 * Returns a set of Books
 *
 * returns List
 **/
exports.getBestSellers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
}, {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a book by its ISBN
 * Returns a book
 *
 * bookISBN String ISBN of book to return
 * returns Book
 **/
exports.getBookByISBN = function(bookISBN) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find books by Author
 * Returns a set of Books
 *
 * bookAuthor String Author of set of books to return
 * returns List
 **/
exports.getBooksByAuthor = function(bookAuthor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
}, {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find books by Genre
 * Returns set of Books
 *
 * bookGenre String Genre of set of books to return
 * returns List
 **/
exports.getBooksByGenre = function(bookGenre) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
}, {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find books by Theme
 * Returns a set of Books
 *
 * bookTheme String Theme of set of books to return
 * returns List
 **/
exports.getBooksByTheme = function(bookTheme) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
}, {
  "isbn" : 1718239283928,
  "title" : "Hamlet",
  "authors" : "William Shakespeare",
  "price" : {
    "value" : 20,
    "currency" : "eur"
  },
  "genre" : "romance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find favorite readings
 * Returns a set of Books
 *
 * returns List
 **/
exports.getFavoriteReadings = function() {
  return new Promise(function(resolve, reject) {

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

