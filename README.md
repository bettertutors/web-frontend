web-frontend
============

Frontend written using HTML5, CSS3 and JavaScript. It uses AngularJS, Cordova and a UI library (all packaged via Ionic).

# Getting started
Once `cd`'d into this directory from your terminal emulator (e.g.: cmd, Terminal), do the following:

## Install dependencies
To get started, ensure you have a recent version of Node.JS installed, then run:

    npm install
    bower install

## Run the project
There are various `gulp` tasks (see "gulpfile.js").

A server is required to serve static files. Use whatever your IDE provides, or:

### Node (option 0)

    npm install http-server -g
    http-server

### Python (option 1)

    python -m SimpleHTTPServer

# Troubleshooting project
Once everything is up and running, ensure you keep you browser's JavaScript console open.

Check there for any errors, if there are none and you're still stuck, start throwing around `$log.info` calls.

If that still doesn't resolve your problem, start an issue on this repo.