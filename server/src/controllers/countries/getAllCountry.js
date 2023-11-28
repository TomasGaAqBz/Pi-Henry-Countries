const {Country,Activity} = require('../../db')

// se va a encargar de traer todos los paises


//  GET | /countries Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const getAllCountry = async () => {
    try {
        // Obtiene todos los países de la base de datos
        const countries = await Country.findAll({
            include:{
                model: Activity,
                attributes: ["name"],
                through: {
                    attributes:[]
                }
            }
    });
        // Devuelve el arreglo de objetos que representa todos los países
        return countries;
    } catch (error) {
        // Si hay un error durante la obtención de los datos, lanza un error con un mensaje específico
        throw new Error('Unable to retrieve data for all countries');
    }
};


module.exports = getAllCountry;