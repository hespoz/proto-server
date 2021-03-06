const Project = require('../models/project').Project


const saveProject = async (request, h) => {

    try {
        if(request.payload.id === undefined || request.payload.id === null) {
            let newProject = new Project()
            newProject.screenList = request.payload.screenList
            let res = await newProject.save()
            return res
        } else {
            let updated = await Project.update({_id:request.payload.id}, {$set:{screenList:request.payload.screenList}}, {upsert:true})
            return request.payload
        }
    } catch (err) {
        console.error(err)
    }

}

const getProject = async (request, h) => {

    try {
        console.log(await Project.findById(request.params.id))
        return await Project.findById(request.params.id)
    } catch (err) {
        console.error(err)
    }

}

module.exports = {
    saveProject: saveProject,
    getProject: getProject
}

