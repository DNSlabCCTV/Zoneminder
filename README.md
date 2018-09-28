# Zoneminder

Zoneminder 1.30.4

## To use docker hub :
<code>docker pull dlandon/zoneminder</code>

<code>docker run -d --name="Zoneminder" \ </code>
<code>--net="bridge" \ </code>
<code>--privileged="true" \ </code>
<code>-p 8080:80/tcp \ </code>
<code>-e TZ="America/New_York" \ </code>
<code>-e SHMEM="50%" \ </code>
<code>-e PUID="99" \ </code>
<code>-e PGID="100" \ </code>
<code>-v "/mnt/cache/appdata/Zoneminder":"/config":rw \ </code>
<code>-v "/mnt/cache/appdata/Zoneminder/data":"/var/cache/zoneminder":rw \ </code>
<code>zoneminder</code>

To access the Zoneminder gui: http://IP:8080/zm

## link
https://hub.docker.com/r/dlandon/zoneminder/
