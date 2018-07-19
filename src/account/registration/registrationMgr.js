'use strict';
var registrationDA = require('./registrationDA');

exports.create = function (req, res) {
    
    try {
        registrationDA.create(req, res);
    } catch (error) {
        console.log(error);
    }
};



