'use strict';


/**
 * Scheduled events
 * List of scheduled events
 *
 * returns List
 **/
exports.getAllEvents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "Presentation of Hamlet",
  "date" : "2019/07/04",
  "place" : "Milano",
  "books" : [ {
    "isbn" : 1718239283928,
    "title" : "Hamlet",
    "authors" : "William Shakespeare",
    "price" : {
      "value" : 20,
      "currency" : "eur"
    },
    "genre" : "romance"
  }, {
    "isbn" : 8293819283920,
    "title" : "Macbet",
    "authors" : "William Shakespeare",
    "price" : {
      "value" : 15,
      "currency" : "eur"
    },
    "genre" : "Drama"
  } ]
}, {
  "id" : 1,
  "name" : "Presentation of Hamlet",
  "date" : "2019/07/04",
  "place" : "Milano",
  "books" : [ {
    "isbn" : 1718239283928,
    "title" : "Hamlet",
    "authors" : "William Shakespeare",
    "price" : {
      "value" : 20,
      "currency" : "eur"
    },
    "genre" : "romance"
  }, {
    "isbn" : 8293819283920,
    "title" : "Macbet",
    "authors" : "William Shakespeare",
    "price" : {
      "value" : 15,
      "currency" : "eur"
    },
    "genre" : "Drama"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Event where a book is presented
 * List events for a given book
 *
 * bookISBN Integer ISBN of the book
 * returns Object
 **/
exports.getBookEvent = function(bookISBN) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

