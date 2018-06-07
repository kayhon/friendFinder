var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    htmlRoutes = require("./app/routing/htmlRoutes"),
    apiRoutes = require('./app/routing/apiRoutes')
    var app = express()
PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'app/public/')))

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function() {
    console.log('Listening on PORT' + PORT)
})
