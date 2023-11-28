
const { Op } = require('sequelize')
const {Country,Activity} = require('../../db')

// GET | /countries/name?="..." Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta). Debe poder buscarlo independientemente de mayúsculas o minúsculas. Si no existe el país, debe mostrar un mensaje adecuado.
const getCountryByName = async (countryName) => {
    try {
        // Busca todos los países que coinciden con el nombre proporcionado (insensible a mayúsculas y minúsculas)
        const findCountries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${countryName}%`,
                },
            },include:{
                    model: Activity,
                    attributes: ["name"],
                    through: {
                        attributes:[]
                    }
                }
        });

        // Devuelve el arreglo de objetos que representa los países encontrados
        return findCountries;
    } catch (error) {
        // Lanza un error si hay algún problema al buscar los países por nombre
        throw new Error('Could not get countries by name');
    }
};

module.exports = getCountryByName;