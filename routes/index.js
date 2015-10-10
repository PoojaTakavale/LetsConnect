
/*
 * GET home page.
 */

var mysql = require("./mySql");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*exports.signUp = function(req, res){
	  res.render('signUp');
	};*/
	 
exports.chkUser = function(req,res){
		var email=req.param("email");
		var pwd=req.param("pass");
		var query="select * from users where email='"+email+"' and password = '"+pwd+"'";
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
				res.render('successSignIn',{fname: fn});
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

	
	