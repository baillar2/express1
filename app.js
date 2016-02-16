// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
//var fileContents = fs.readFileSync('data.txt')
var logger = require('morgan')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))
// Routes \\
app.post('/formsubmit', function(req, res){
	res.redirect('./success')
})
app.get('/success', function(req, res){
	res.send('success!!')
})
app.get('/', function(req, res){
  //res.header('Content-Type','text/html')
  res.sendFile('index.html', {root: './public'})
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
