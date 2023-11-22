//* traemos las activity de db
const {Activity} = require('../../db')


const createActivities = async({name,difficulty,duration,season}) =>{

    const newActivity = await Activity.create({
        name,difficulty,duration,season
    })

    return newActivity
}




module.exports = createActivities;