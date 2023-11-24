//* traemos las activity de db
const {Activity} = require('../../db')

// POST | /activitiesEsta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

const createActivities = async({name,difficulty,duration,season}) =>{

    const newActivity = await Activity.create({
        name,difficulty,duration,season
    })

    return newActivity
}




module.exports = createActivities;