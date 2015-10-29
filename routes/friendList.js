var mysql = ('./mySql');

exports.getFriendlistpage = function(req,res){
	
	res.render('friendList');
};
/*app.get('/search',function(req,res){
connection.query('SELECT first_name from TABLE_NAME where first_name like "%'+req.query.key+'%"',
function(err, rows, fields) {
if (err) throw err;
var data=[];
for(i=0;i<rows.length;i++)
{
data.push(rows[i].first_name);
}
res.end(JSON.stringify(data));
});
});


var mysql = require("./mySql");

exports.friendList = function(req, res){
	  res.render('friendList');
	};


exports.friendList = function(req,res){
	console.log("inside friend list");
		//var userid = req.param("userid");
		var fname=req.param("fname");
		
		console.log("");
		var query = "SELECT fname from demotab where fname like "%'+req.query.key+'%"')";
		function(err, rows, fields) {
			if (err) throw err;
			var data=[];
			for(i=0;i<rows.length;i++)
			{
			data.push(rows[i].fname);
			}
			res.end(JSON.stringify(data));
			});
			});
			
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{				
				
				
					res.render('index');
					}
		
						 
		},query);

};

*/

exports.friendlist = function(req,res){
	
	var frnds = req.param.searchfrnds;
	
	var query = "SELECT user_id,fname FROM demotab where fname LIKE '"+searchfrnds+"%'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{						
				
			if(results.length > 0) {
				res.send(results);
				
		
				
			}
			else {    
				res.send("error");
			}
				}
	
					 
	},query);
};