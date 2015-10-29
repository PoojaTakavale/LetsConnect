
/*
 * GET home page.
 */

var mysql = require("./mySql");

//req.session.email = results[0].email;

//var email = req.session.email;

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*exports.signUp = function(req, res){
	  res.render('signUp');
	};*/
	 
exports.chkUser = function(req,res){
		//var email = req.session.email;
		var email=req.param("email");
		var pwd=req.param("pwd");
		var query="select * from demotab where email='"+email+"' and pwd = '"+pwd+"'";
		//var dbConn = mysql.fetchData();
		
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				if(results.length > 0) {
					console.log(results[0].email);
					
			
					var fn = results[0].fname;
					//session.email = email;
					//var date1 = new Date();
					//session.date = date1.getFullYear() +"-" +date1.getMonth() +"-" +date1.getDate() +" " +date1.getHours() +":" +date1.getMinutes() +":" +date1.getSeconds();
					//res.send({"login":"Success","userEmail":results[0].emailId,"userId":results[0].userId,"currentLogin":session.date});
				res.render('userDetails',{fname: fn});
				//res.render('userDetails',{fname: fn});
				}
				else {    
					console.log("Invalid Login");
					//res.send({"login":"Please enter a valid email and password"});
					res.render('signUp');
				}
			}  
		},query);
};

exports.signout = function(req, res){
	
	req.session.destroy();
	  res.render('index');
	};	
	