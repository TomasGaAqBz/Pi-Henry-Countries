//traemos las activity de db
const {Activity} = require('../../db')
//📍 GET | /activities Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const getActivities = async () => {
    try {
        // Obtiene todas las actividades turísticas de la base de datos
        const activities = await Activity.findAll();

        // Devuelve el arreglo de objetos que representa las actividades turísticas
        return activities;
    } catch (error) {
        // Lanza un error si hay algún problema al obtener las actividades turísticas
        throw new Error('Tourist activities could not be obtaineds');
    }
};

module.exports = getActivities;