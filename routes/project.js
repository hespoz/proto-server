"use strict"

const saveProject = require('../controllers/project').saveProject

module.exports = function () {
    return [
        {
            method: 'POST',
            path: '/save',
            handler: saveProject
        }
    ]
}()