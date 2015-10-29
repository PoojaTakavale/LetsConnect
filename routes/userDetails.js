var mysql = require("./mySql");

exports.userDetails = function(req, res){
	  res.render('userDetails');
	};
	
	
	exports.userDetails1 = function(req,res){
		console.log("inside signup");
			var email=req.param("email");
			var pwd=req.param("pass");
			var fnm = req.param("fname");
			var lnm = req.param("lname");
			console.log(lnm);
			//var query="insert into users (fname,lname,email,password) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		
			
			mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
						res.send('userdetail page');
							
							}  
			},query);
	};
