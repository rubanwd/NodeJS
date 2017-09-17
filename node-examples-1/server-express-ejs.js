var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/contact', urlencodedParser, function(req, res) {
  res.render('contact-success', {data: req.body});
});

app.listen(3000);



app.get('/profile/:name', function(req, res) {
  res.render('profile', {person: req.params.name});
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function(req, res) {
  res.render('contact', {qs: req.query});
})


