var mysql = require("./mySql");

exports.signUp = function(req, res){
	  res.render('signUp');
	};
/*

 * GET home page.
 

var mysql = require("./mySql");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports signUp = function(req,res){
	var email = req.param("email");
	var pwd = req.param("pass");
	var fnm = req.param("fname");
	var lnm = req.param("lname");
	//var query="select * from users where email='"+email+"'";
	var dbConn = mysql.getDBConn();
	
	mysql.fetchData(function(err,results){
	if(err){ throw err; }
	else {
		if(results.length === 0) {
			query = "insert into users (fname, lname, fname, lname) values ('" +fnm +"','" +lnm +"','" +email +"','" +pwd +"')";
			//var dbConn = mysql.getDBConn();
			//if(dbConn === "empty"){
				res.render('userDetails'); 
		}}
		},query);
		}
		//else {    
		//	res.send({"signup":"Email id is already in use. Please login or sign up with other email id"});
		


	
	*/

exports.userSignUp = function(req,res){
	console.log("inside signup");
		var email=req.param("email");
		var pwd=req.param("pass");
		var fnm = req.param("fname");
		var lnm = req.param("lname");
		console.log(lnm);
		var query="insert into demotab (fname,lname,email,pwd) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		//var query="insert into users (fname,lname,email,password) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		console.log(email);
		//var query = "select * from demotab where email = '"+email+"' ";
		console.log(email);
		//console.log(query1);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{				
				if(results.length === 0)
					{
					console.log("inside condition");
					//var query="insert into demotab (fname,lname,email,pwd) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
					
					}
				else
					{
					//window.alert("Email Already Exists !!! ");
					//res.send({signUp:"Email Id already exists !!"});
					res.render('index',{fname: fnm});
					}
						
						}  
		},query);
};

