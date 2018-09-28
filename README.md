# Zoneminder

Zoneminder 1.30.4

## To use docker hub :
docker pull dlandon/zoneminder


docker run -d --name="Zoneminder" \
--net="bridge" \
--privileged="true" \
-p 8080:80/tcp \
-e TZ="America/New_York" \
-e SHMEM="50%" \
-e PUID="99" \
-e PGID="100" \
-v "/mnt/cache/appdata/Zoneminder":"/config":rw \
-v "/mnt/cache/appdata/Zoneminder/data":"/var/cache/zoneminder":rw \
zoneminder

To access the Zoneminder gui: http://IP:8080/zm

## link
https://hub.docker.com/r/dlandon/zoneminder/
