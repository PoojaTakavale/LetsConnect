var mysql = require("./mySql");

exports.about = function(req, res){
	  res.render('about');
	};


exports.about1 = function(req,res){
	console.log("inside about");
		var userid = req.param("userid");
		var current_city=req.param("current_city");
		var sex=req.param("sex");
		var work=req.param("work");
		var education=req.param("education");
		var phoneno=req.param("phoneno");
		var life_event=req.param("life_event");
		var life_event_date_=req.param("life_event_date_");
		
		
		console.log(current_city);
		
		var query = "insert into user_about (userid,current_city,sex,work,education,phoneno,life_event,life_event_date_) values (6,'"+current_city+"', '"+sex+"', '"+work+"', '"+education+"', '"+phoneno+"', '"+life_event+"', '"+life_event_date_+"')";
		//console.log(query1);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{						
					res.render('userDetails',{fname: fnm});
					}
		
						 
		},query);

};

