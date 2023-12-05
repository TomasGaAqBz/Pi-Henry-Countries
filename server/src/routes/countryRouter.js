
const countryRouter = require('express').Router();
const { response } = require('express');
const getAllCountry = require('../controllers/countries/getAllCountry.js')
const getCountryById = require('../controllers/countries/getCountryById.js')
const getCountryByName = require('../controllers/countries/getCountryByName.js')





// Maneja la solicitud GET a la ruta '/countries/' para obtener todos los países
countryRouter.get('/', async (req, res) => {
    const {name} = req.query
    try {
        const response = name ? await getCountryByName(name) : await getAllCountry();


        // Responde con un código de estado 200 y la lista de países en formato JSON
        res.status(200).json(response);

    } catch (error) {
        // Si hay un error, responde con un código de estado 400 y un mensaje de error en formato JSON
        res.status(400).json({ error: error.message });
    }
});

// 📍 GET | /countries/:id Pais Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país). Tiene que incluir los datos de las actividades turísticas asociadas a este país.

countryRouter.get('/:countryID', async (req, res) => {
    // Obtiene el ID del país de los parámetros de la ruta
    const countryID = req.params.countryID;

    try {
        // Obtiene los detalles del país utilizando su ID
        const country = await getCountryById(countryID);

        // Si la llamada es exitosa, responde con un código de estado 200 y los detalles del país en formato JSON
        res.status(200).json(country);
    } catch (error) {
        // Si hay un error, maneja el error y responde con un código de estado 400 y un mensaje de error en formato JSON
        res.status(400).json({ error: error.message });
    }
});

// GET | /countries/name?="..." Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta). Debe poder buscarlo independientemente de mayúsculas o minúsculas. Si no existe el país, debe mostrar un mensaje adecuado.




module.exports = countryRouter;