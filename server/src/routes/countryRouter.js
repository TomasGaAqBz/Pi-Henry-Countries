
const countryRouter = require('express').Router();
const getAllCountry = require('../controllers/countries/getAllCountry.js')
const getCountryById = require('../controllers/countries/getCountryById.js')
const getCountryByName = require('../controllers/countries/getCountryByName.js')






countryRouter.get('/', async (req, res) => {
    try {
        const countries = await getAllCountry();
        res.status(200).json(countries);

    } catch (error) {
        
        res.status(400).json({ error: error.message });
    }
});

// 📍 GET | /countries/:id Pais Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país). Tiene que incluir los datos de las actividades turísticas asociadas a este país.

countryRouter.get('/:countryID',getCountryById )

// GET | /countries/name?="..." Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta). Debe poder buscarlo independientemente de mayúsculas o minúsculas. Si no existe el país, debe mostrar un mensaje adecuado.




module.exports = countryRouter;