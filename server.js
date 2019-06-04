// Required modules
const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

// Configure Node server port
const serverPort = 6200;

// Start the server
const server = express();

// Use plugin to serve Brotli files if browser supports them or fallback to Gzip
server.use("/", expressStaticGzip(path.join(__dirname + '/dist'), {
    enableBrotli: true
}));

// Get the URL and redirect http to https in production environment else redirect to the main file
server.get(/.*/, function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production')
        res.redirect('https://' + req.hostname + req.url);
    else
        res.sendFile(__dirname + '/dist/index.html');
});

// Start the server by listening on the default port or the one configurated before
server.listen(process.env.PORT || serverPort, function () {
    console.log('Node server initialized. Port:%d', process.env.PORT || serverPort);
});
