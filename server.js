
'use strict';

const Hapi = require('hapi')
const mongoose = require('mongoose')

mongoose.connect('mongodb://dev:dev@ds247430.mlab.com:47430/protodb')

const Project = new mongoose.Schema({
    screenList: { type: Array, default: [] }
})


const server = Hapi.server({
    port: 9000,
    host: 'localhost'
});


server.route({
    method: 'GET',
    path: '/test',
    handler: (request, h) => {

        return 'Hello, world!';
    }
})


server.route({
    method: 'POST',
    path: '/save',
    handler: (request, h) => {

        return 'Hello, world!';
    }
})




const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);

});

init()