//* traemos las activity de db
const {Activity} = require('../../db')


const getActivities = async() => {
    const activities = await Activity.findAll()
    return activities
}

module.exports = getActivities;