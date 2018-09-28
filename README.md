# Zoneminder

Zoneminder 1.30.4

## To use docker hub :
<code>docker pull dlandon/zoneminder</code>

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
<code>zoneminder</code></br>

To access the Zoneminder gui: http://IP:8080/zm

## Test API
![아키텍쳐](testapi.PNG)</br>
##### ■ Add Cameras in Node.JS
Use Shinobi.ShinobiSetup Function

##### ■ Delete Cameras in Node.JS
Use Shinobi.ShinobiDeleteMonitor Function


## link
https://hub.docker.com/r/dlandon/zoneminder/
