'use strict';

var fs = require('fs'),
    path = require('path');

const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const swaggerTools = require('swagger-tools');
const passport = require('passport');
const jsyaml = require('js-yaml');
const serverPort = process.env.PORT || 3000;

//Root of static files
app.use(express.static('public'));


app.use(cookieParser());
app.use(session({
  secret: 'hypermedia project',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 15 * 60 * 1000}   // validity of the session :  15 minutes
}));
app.use(passport.initialize());
app.use(passport.session());



// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './other/controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'other/api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());


  // Start the server
  app.listen(serverPort, () => {
    console.log('Server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  });

});
