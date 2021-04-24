const Skill = require("../models/skill")


const index = (req, res) =>{
    res.render("skills/index", {
        skills: Skill.getAll()
    })
}

const show = (req, res) => {
    res.render("skills/show", {
        skills: Skill.getOne(req.params.id)
    })
}

const newSkill = (req, res) => {
    res.render("skills/new")
}

const deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id)
    res.redirect("/skills")
}

const create = (req, res) => {
    console.log(req.body)
    // req.body.done = false
    Skill.create(req.body)
    res.redirect("skills")
}



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}