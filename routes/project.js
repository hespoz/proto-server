"use strict"

const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const saveProject = require('../controllers/project').saveProject
const getProject = require('../controllers/project').getProject

module.exports = function () {
    return [
        {
            method: 'POST',
            path: '/save',
            handler: saveProject
        },
        {
            method: 'GET',
            path: '/app/{id}',
            handler: getProject,
            options: {
                validate: {
                    params: {
                        id: Joi.objectId()
                    }
                }
            }
        }
    ]
}()