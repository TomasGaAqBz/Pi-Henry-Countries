const { Activity, Country } = require('../../db');

const createActivity = async ({ name, difficulty, duration, season, countries }) => {
    try {
        // Validar que los datos proporcionados sean correctos antes de crear la actividad
        if (!name || !difficulty || !duration || !season || !countries || countries.length === 0) {
            throw new Error('Invalid data provided');
        }

        // Crear una nueva actividad turística en la base de datos
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });

        // Verificar que los países existan antes de asociar la actividad con ellos
        const existingCountries = await Country.findAll({
            where: { id: countries }
        });

        if (!existingCountries || existingCountries.length !== countries.length) {
            throw new Error('Invalid country/countries provided');
        }

        // Asociar la actividad con los países encontrados
        await newActivity.addCountries(existingCountries);

        // Devolver el objeto de la actividad turística recién creada
        return newActivity;
    } catch (error) {
        // Imprimir el error específico para obtener más detalles en la consola del servidor
        console.error('Error creating tourist activity:', error);

        // Lanzar un error genérico para ocultar detalles internos en la respuesta al cliente
        throw new Error('Error when creating the tourist activity');
    }
};

module.exports = createActivity;
