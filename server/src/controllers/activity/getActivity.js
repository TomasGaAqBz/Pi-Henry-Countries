//* traemos las activity de db
const {Activity} = require('../../db')
//📍 GET | /activities Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const getActivities = async() => {
    const activities = await Activity.findAll()
    return activities
}

module.exports = getActivities;