'use strict';

const dbConnector = require('../utils/dbConnector.js');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');

const pool = dbConnector.pool;

/**
 * Login
 * Login with a form
 *
 * username String Username of the user who wants to connect
 * password String Password of the user who wants to connect
 * no response value expected for this operation
 **/
exports.userLogin = function (body, request, response) {
  const {username, password} = body;
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public."Users" WHERE username = ($1)', [username], (error, results) => {
        if (error) {
          throw error;
        }
      if (results.rowCount === 0) {
          resolve({failure: "Wrong Username"});
      } else {
        bcrypt.compare(password, results.rows[0].password, (error, check) => {
          if (error) {
            throw error
          }
          if (check) {
            request.login(username, (error) => {
                resolve({success: "Success", redirect: '/'});
            })
          } else {
              resolve({failure: "Wrong Password"});
          }
        });
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
exports.userLogout = function (request, response) {
  return new Promise(function(resolve, reject) {
    request.logout();
    request.redirect('/', 200);
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

passport.serializeUser(function (username, done) {
  done(null, username);
});

passport.deserializeUser(function (username, done) {
  done(null, username);
});
