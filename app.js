
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , signup = require('./routes/signUp')
  , about = require('./routes/about')
  , interest = require('./routes/interest')
  , createGroup = require('./routes/createGroup')
  , friends = require('./routes/friendList')
  , userDetail = require('./routes/userDetails');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/signup', signup.signUp);
app.post('/usersignup', signup.userSignUp);
app.get('/usersignup', signup.userSignUp);
//app.get('/checkuser',routes.chkUser);
//app.post('/chckuser',routes.chkUser);

app.get('/about',about.about);
app.post('/about',about.about1);

app.get('/interest',interest.interest);
app.post('/interest',interest.interest1);

app.get('/createGroup',createGroup.createGroup);
app.post('/creategroup',createGroup.createGroup1);

app.post('/getfriends',friends.friendlist);

app.use(express.cookieParser('pooja1327'));
app.use(express.session());

//app.post('/userdetails',routes.userDetails1);
//app.get('/userdetails',routes.userDetails);
//app.get('/',routes.);

app.get('/signOut',routes.signout);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
