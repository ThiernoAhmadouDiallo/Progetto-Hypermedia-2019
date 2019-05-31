'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userLogin = function userLogin (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  User.userLogin(username,password)
    .then(function (response) {
      utils.writeJson(res, response,200);
    })
    .catch(function (response) {
      utils.writeJson(res, response,404);
    });
};

module.exports.userLogout = function userLogout (req, res, next) {
  User.userLogout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegister = function userRegister (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userRegister(body)
    .then(function (response) {
      utils.writeJson(res, response,200);
    })
    .catch(function (response) {
      utils.writeJson(res, response,400);
    });
};
