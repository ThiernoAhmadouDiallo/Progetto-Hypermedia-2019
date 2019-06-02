'use strict';

const dbConnector = require('../utils/dbConnector.js');
const pool = dbConnector.pool;

/**
 * Login
 * Login with a form
 *
 * username String Username of the user who wants to connect
 * password String Password of the user who wants to connect
 * no response value expected for this operation
 **/
exports.userLogin = function(username,password) {
  return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Users" WHERE username = ($1) AND password = ($2)', [username, password], (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rowCount !== 0) {
          resolve('{"success" : "You are in "}');
        }else {
          resolve('{"failure" : "Wrong Password or Username"}');
        }
    });
  });
};


/**
 * Logout
 * Logout the client
 *
 * no response value expected for this operation
 **/
exports.userLogout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};


/**
 * Register
 * Register into the store
 *
 * body User 
 * no response value expected for this operation
 **/
exports.userRegister = function(body) {
  return new Promise(function(resolve, reject) {
    const {username, password} = body;
    pool.query('INSERT INTO public."Users" VALUES ($1, $2)', [username, password], (error) => {
      if (error) {
        //throw error;
        reject('{"message" : "Username already used"}');
      } else {
        resolve('{"success" : "You have been registered successfully"}');
      }
    });
  });
};

