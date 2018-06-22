'use strict';
var registrationDA = require('./registrationDA');

exports.create = function (req, res) {
    registrationDA.create(req, res);
};
