var Zoneminder = require(__dirname + "/Module");

var rtspUrl = [];
rtspUrl.push('rtsp://192.168.1.106:8555/unicast');


var host = '192.168.1.104';
var ports = 8180;  //  web port  - ports[0]
var cameraName = 'Test';
var callback = '';

// Set Up Camera
Zoneminder.ZoneminderSetup(host, ports, cameraName, rtspUrl, callback,function(result,data){
	if (result){
	    console.log(result);
	}
});

// Delete Camera
/*
Zoneminder.ZoneminderDeleteMonitor(host, ports, cameraName, callback,function(result,data){
	if (result){
            console.log(result);
        }
});
*/
