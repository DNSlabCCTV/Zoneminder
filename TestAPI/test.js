var Zoneminder = require(__dirname + "/index");

var rtspUrl = [];
rtspUrl.push('rtsp://192.168.1.106:8555/unicast');
//rtspUrl.push('rtsp://admin:dns3438@192.168.1.107:88/videoMain');
rtspUrl.push('rtsp://admin:dns5303438@192.168.1.102:88/videoMain');

var host = '192.168.1.104';
var ports = 8180;  //  web port  - ports[0]
var cameraName = 'Test';
var callback = '';

Zoneminder.ZoneminderSetup(host, ports, cameraName, rtspUrl, callback,function(result,data){
	if (result){
	    console.log(result);
	}
});
/*
Zoneminder.ZoneminderDeleteMonitor(host, ports, cameraName, callback,function(result,data){
	if (result){
            console.log(result);
        }
});
*/
