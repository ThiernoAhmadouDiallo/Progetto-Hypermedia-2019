'use strict';


/**
 * All authors
 * List of authors
 *
 * returns List
 **/
exports.getAllAuthors = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "William",
  "surname" : "Shakespeare",
  "info" : "Famous author"
}, {
  "id" : 1,
  "name" : "William",
  "surname" : "Shakespeare",
  "info" : "Famous author"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find authors by Name
 * Return informations about Authors
 *
 * authorFullName String Name of author to return
 * returns List
 **/
exports.getAuthorByFullName = function(authorFullName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "William",
  "surname" : "Shakespeare",
  "info" : "Famous author"
}, {
  "id" : 1,
  "name" : "William",
  "surname" : "Shakespeare",
  "info" : "Famous author"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

