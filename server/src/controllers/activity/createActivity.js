//* traemos las activity de db
const {Activity} = require('../../db')

// POST | /activitiesEsta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

const createActivities = async ({ name, difficulty, duration, season, countries }) => {
    try {
        // Crea una nueva actividad turística en la base de datos
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        // Asocia la actividad con los países encontrados
        await newActivity.addCountries(countries)
        // Devuelve el objeto de la actividad turística recién creada
        return newActivity;
    } catch (error) {
        // Lanza un error si hay algún problema al crear la actividad o asociarla con los países
        throw new Error('Error when creating the tourist activity');
    }
};

module.exports = createActivities;