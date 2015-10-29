var mysql = require('./mySql');

exports.group = function(req, res){
	  res.render('group');
	};

	exports.createGroup = function(req,res){
		
			//var userid = req.param("userid");
			var groupname = req.param("groupname");
			var groupdesc = req.param("groupdesc");
			
			
			var query = "insert into user_group(user_id_group,group_name,group_desc,group_admin) values(1,'"+groupname+"','"+groupdesc+"','1')";

			
			//var query = "insert into user_about (userid,current_city,sex,work,education,phoneno,life_event,life_event_date_) values (6,'"+current_city+"', '"+sex+"', '"+work+"', '"+education+"', '"+phoneno+"', '"+life_event+"', '"+life_event_date_+"')";
			//console.log(query1);
			mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{						
						res.render('createGroup');
						}
			
							 
			},query);

	};