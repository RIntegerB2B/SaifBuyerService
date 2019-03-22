var express = require('express'),
    app = express(),
<<<<<<< HEAD
    port = process.env.PORT || 3071, // port no
=======
    port = process.env.PORT || 3051, // port no
>>>>>>> 24cbc973015796c16b72ff68b79f1159199a7fd4
    bodyParser = require('body-parser');
var cors = require('cors');
var exec = require('child_process').exec;
var fs = require('fs');
var http = require('http');
var https = require('https');


var routes=require('./route');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(cors());
routes.loadRoutes(app);
var httpServer = http.createServer(app);


<<<<<<< HEAD
httpServer.listen(port);
=======
httpServer.listen(3051);
>>>>>>> 24cbc973015796c16b72ff68b79f1159199a7fd4



var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {});

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
})

app.get('/test', function (req, res) {
    res.send("Success!");
})

<<<<<<< HEAD
console.log('Arif Buyer Service started on: ' + port);
=======
console.log('Saif Buyer Service started on: ' + port);
>>>>>>> 24cbc973015796c16b72ff68b79f1159199a7fd4
