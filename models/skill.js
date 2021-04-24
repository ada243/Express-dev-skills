const skills = [
    {skill: "JavaScript", level: 5, description: "I'm baby freegan tattooed glossier gastropub ennui. Beard post-ironic disrupt farm-to-table cronut keytar vaporware hot chicken. Succulents authentic pug, unicorn neutra marfa food truck +1 keffiyeh pok pok cardigan sartorial freegan. Organic twee sustainable tousled subway tile."},
    {skill: "HTML5", level: 5, description: "I'm baby freegan tattooed glossier gastropub ennui. Beard post-ironic disrupt farm-to-table cronut keytar vaporware hot chicken. Succulents authentic pug, unicorn neutra marfa food truck +1 keffiyeh pok pok cardigan sartorial freegan. Organic twee sustainable tousled subway tile."},
    {skill: "CSS3", level: 5, description: "I'm baby freegan tattooed glossier gastropub ennui. Beard post-ironic disrupt farm-to-table cronut keytar vaporware hot chicken. Succulents authentic pug, unicorn neutra marfa food truck +1 keffiyeh pok pok cardigan sartorial freegan. Organic twee sustainable tousled subway tile."},
]

const getAll = () => {
    return skills
}

const getOne = (id) => {
    return skills[id]
}

const create = (skill) => {
    skills.push(skill)
}


module.exports = {
     getAll,
     getOne,
     create
};