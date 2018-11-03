# Zoneminder

## To use docker hub :
### Docker Container Set up Zoneminder 1.32.2
<code>docker pull dlandon/zoneminder</code>

### Docker Container Set up Zoneminder 1.30.4
<code>git clone https://github.com/DNSlabCCTV/Zoneminder</code></br>
<code>cd Zoneminder</code></br>
<code>unzip zoneminder-51fa254a84eec93d408d4f5070eb67edc39100c3.zip</code></br>
<code>cd zoneminder-51fa254a84eec93d408d4f5070eb67edc39100c3</code></br>
<code>docker build -t zoneminder . </code></br>
<code>docker run -d -p 8080:80 zoneminder</code></br>

### Docker run command
<code>docker run -d --name="Zoneminder" \ </code></br>
<code>--net="bridge" \ </code></br>
<code>--privileged="true" \ </code></br>
<code>-p 8080:80/tcp \ </code></br>
<code>-e TZ="America/New_York" \ </code></br>
<code>-e SHMEM="50%" \ </code></br>
<code>-e PUID="99" \ </code></br>
<code>-e PGID="100" \ </code></br>
<code>-v "/mnt/cache/appdata/Zoneminder":"/config":rw \ </code></br>
<code>-v "/mnt/cache/appdata/Zoneminder/data":"/var/cache/zoneminder":rw \ </code></br>
<code>dlandon/zoneminder</code></br>

To access the Zoneminder gui: http://IP:8080/zm

## Test API
![아키텍쳐](testapi.PNG)</br>
##### ■ Add Cameras in Node.JS
Use Zoneminder.ZoneminderSetup Function

##### ■ Delete Cameras in Node.JS
Use Zoneminder.ZoneminderDeleteMonitor Function


## link
https://hub.docker.com/r/dlandon/zoneminder/
