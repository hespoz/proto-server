const mongoose = require("mongoose")
mongoose.Promise = Promise

const ProjectSchema = new mongoose.Schema({
    screenList: { type: Array, default: [] }
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = {
    Project: Project
}