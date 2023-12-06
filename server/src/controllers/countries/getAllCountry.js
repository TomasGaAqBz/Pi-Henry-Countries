const {Country,Activity} = require('../../db')

// se va a encargar de traer todos los paises

//  GET | /countries Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const getAllCountry = async (activity = null) => {
    try {
        // Configuración de opciones para la consulta
        const options = {
            include: {
                model: Activity,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        };

        // Si se proporciona un parámetro de actividad, agregar la condición a la consulta
        if (activity) {
            options.include.where = {
                name: activity
            };
        }

        // Realizar la consulta a la base de datos
        const countries = await Country.findAll(options);

        // Devuelve el arreglo de objetos que representa todos los países
        return countries;
    } catch (error) {
        // Si hay un error durante la obtención de los datos, lanza un error con un mensaje específico
        throw new Error('Unable to retrieve data for all countries');
    }
};

module.exports = getAllCountry;