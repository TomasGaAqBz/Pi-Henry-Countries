const { Sequelize } = require("sequelize");
const { Country,} = require("../../db");


// 📍 GET | /countries/:id Pais Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país). Tiene que incluir los datos de las actividades turísticas asociadas a este país.

const getCountryById = async (countryId) => {
    // Expresión regular que valida que el ID del país tenga exactamente 3 letras
    const countryIdRegex = /^[A-Za-z]{3}$/i;

    // Verifica que el countryId cumple con la expresión regular
    if (!countryIdRegex.test(countryId)) {
        throw new Error("The ID must have 3 letters");
    }

    try {
        // Busca en la base de datos un país con el ID proporcionado (insensible a mayúsculas y minúsculas)
        const country = await Country.findOne({
            where: {
                id: {
                    [Sequelize.Op.iLike]: countryId
                }
            }
        });

        // Si no se encuentra ningún país con el ID proporcionado, lanza un error
        if (!country) {
            throw new Error("CountryNotFound");
        }

        // Devuelve la información detallada del país
        return country;
    } catch (error) {
        // Si ocurre un error durante la búsqueda en la base de datos, lanza un error general
        throw new Error('Could not fetch country data');
    }
};

module.exports = getCountryById;