var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var config = require('./config')
var fileRoutes    = require("./api/routes/file-upload");






// Use body parser to parse JSON body
app.use(bodyParser.json())
app.use(express.static("./"));
app.use("/api/", fileRoutes);


var server = app.listen(3000, function () {
    'use strict'

    var host = server.address().address,
        port = server.address().port

    console.log(' Server is listening at http://%s:%s', host, port)
});