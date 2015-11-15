var express = require('express');
var path = require('path');

var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, function(){
  console.log('listening on: ' + this.address().port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();
app.use(router);

/* Routing */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/subscribe', function (req, res) {
  console.log(req.body);
});

router.post('/contact', function (req, res) {
  console.log(req.body);
});

module.exports = app;
