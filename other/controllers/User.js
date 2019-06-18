'use strict';

const utils = require('../utils/writer.js');
const User = require('../service/UserService');

module.exports.userLogin = function userLogin (req, res, next) {
  const body = req.swagger.params['body'].value;
  console.log(req.user);
  console.log(req.isAuthenticated());
    User.userLogin(body, req)
    .then(function (response) {
      utils.writeJson(res, response,200);
    })
    .catch(function (response) {
      utils.writeJson(res, response,404);
    });
};

module.exports.userLogout = function userLogout (req, res, next) {
  User.userLogout(req, res)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegister = function userRegister (req, res, next) {
  const body = req.swagger.params['body'].value;
  User.userRegister(body)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
        console.log(response)
      utils.writeJson(res, response,400);
    });
};
