'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;



/**
 * View the content of the cart
 *
 * cartId Long 
 * returns Cart
 **/
exports.getCart = function (username) {
  return new Promise(function(resolve, reject) {
    pool.query('Select * from "Carts" where username = $1', [username], (error, result) => {
      if (error) {
        throw error;
      } else {
        resolve(result.rows);
      }
    })
  });
};


/**
 * Delete book from the cart
 *
 * cartId Integer 
 * bookISBN Integer 
 * no response value expected for this operation
 **/
exports.deleteBookFromCart = function (username, bookISBN) {
  return new Promise(function (resolve, reject) {
    pool.query('Delete from "Carts" where username = $1 and isbn = $2', [username, bookISBN], (error, result) => {
      if (error) {
        throw error;
      } else {
        resolve(result.rows);
      }
    })
  });
};


/**
 * Add book in the cart
 *
 * username String
 * bookISBN Integer
 * 201 if inserted successfully
 **/
exports.addBookInCart = function (username, bookISBN) {
  return new Promise(function(resolve, reject) {
    pool.query('Insert into "Carts" (username, isbn) values ($1 ,$2)', [username, bookISBN], (error, result) => {
      if (error) {
        throw error;
      } else {
        resolve(result.rows);
      }
    })
  });
};

