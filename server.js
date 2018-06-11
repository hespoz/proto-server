'use strict';

const Hapi = require('hapi')
const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://dev:dev123@ds247430.mlab.com:47430/protodb')

const routes = require('./routes')

const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
});


// Add all the routes within the routes folder
for (var route in routes) {
    server.route(routes[route]);
}


const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);

});

init()
