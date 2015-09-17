var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var reactRender = require('react-render')

// add support for es6/jsx
require('babel/register')

// the address to run the server at
var ADDRESS = '127.0.0.1'
// the port to listen to
var PORT = 8001

// create an express app
var app = express()
// and a server that hosts the app
var server = http.Server(app)

// use the body parser middleware so that the post comes in as test
app.use(bodyParser.json())

/// url config

// the root url
app.get('/', function(req, res) {
    // end the response with a 404 error message and no other process
    res.end('this server renders react components!')
})

// posts to the react render url
app.post('/render', function(req, res) {
    console.log(req.body)
    // run the body of the response through react render
    reactRender(req.body, function(err, markup) {
        var error = null
        if (err) {
            error = {
                type: err.constructor.name,
                message: err.message,
                stack: err.stack
            }
        }console.log(markup)
        res.json({
            error: error,
            markup: markup
        })
    })
})

// start the server at the designated address/port
server.listen(PORT, ADDRESS, function() {
    console.log('react render server listening at http://' + ADDRESS + ':' + PORT);
});


