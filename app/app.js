var express = require('express');
var reload = require('reload');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dataFile = require('./data/data.json');

Employee = require('./model/employee');

app.set('port', process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');

//mongodb connection setup
mongoose.connect('mongodb://localhost/niraj');
var db = mongoose.connection;

app.locals.siteTitle = 'Friend Details';

app.use(express.static('app/public'));
app.use(require('./routers/index'));
app.use(require('./routers/friends'));

app.get("/data/employee",function(req,res){
  Employee.getEmployee(function(err,employee){
    if(err){
      throw err;
    }
    res.json(employee);
    console.log(employee);
  });

});


var Server = app.listen(app.get('port'), function(){
  console.log('listen to port '+app.get('port'));
});

reload(Server, app);



//var http = require('http');
//var myServer = http.createServer(function(req, res){
//  res.writeHead(200,{"Content-Type":"text/html"});
//  res.write('<h1>connection meetups</h1>');
//  res.end();
//});
//myServer.listen(3000);
//console.log('go to port 3000');
