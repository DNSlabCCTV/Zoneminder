var request = require('request');
var IP = 'http://192.168.56.1:3455';
var dict = new Array();
var count = 0;

function CheckStatus(ip){
   return new Promise(function(resolve, reject){
	request(ip, function (error, response, body) {
	   if(error){
		console.log(response);
		resolve(error);
		}
	   else
		resolve(response.statusCode);
	});
   });
};
function Settime(time,ip,Cname){
   var timer = setInterval(function() {
        CheckStatus(ip).then(function(tableData){
	var statuscode= tableData;
          if(tableData>=200 && tableData<300){
	    console.log(statuscode,`,`,time,`, pop the `,Cname);
	    clearInterval(timer);
	    for(var i =0; i< dict.length; i++){
		if(dict[i].name==Cname){
		    dict.splice(i,1);
		    console.log("체크",JSON.stringify(dict));
		}
	    }
	  }
	  else
	    console.log(statuscode);
        })
   }, time);
}



module.exports.CheckContainer = function(container_name){
count = count + 1;
var Cname = container_name+"_"+count;
    dict.push({
	name:Cname
    });
console.log(JSON.stringify(dict));
Settime(2000,IP,Cname);
}
