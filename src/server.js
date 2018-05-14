var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
var cors = require('cors');
var exec = require('child_process').exec;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.listen(port);


var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

app.get('/test', function (req, res) {
  res.end( "Success" );
})

app.get('/deploy', function (req, res) {
 
var yourscript = exec('sh ./home/ubuntu/myfolder/batchfile/deploy-buyer-app.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
  res.end( "Success" );
  yourscript();
})



console.log('Buyer App started on: ' + port);

