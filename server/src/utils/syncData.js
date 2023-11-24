const axios = require('axios')
const {Country} = require('../db')

//Sincroniza la base de datos local con los datos de países provenientes de una API externa.
const countrySync = async () => {
    const URL_API = "http://localhost:5000/countries";

    try {
        // Se consulta si hay países creados en la base de datos local
        const countriesExist = await Country.findAll();

        // Si no hay países creados, se procede a obtener y crearlos desde la API externa
        if (countriesExist.length === 0) {
            // Se obtienen los datos de países desde la API externa
            const response = await axios.get(URL_API);
            const countries = response.data;

            // Se mapean las propiedades y se crea un array para luego realizar un bulk create en la base de datos
            const loadCountriesData = countries.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flagImage: country.flags.png,
                    coatOfArms: country.coatOfArms.png,
                    continent: country.continents[0],
                    capital: country.capital ? country.capital[0] : "-",
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                };
            });

            // Se crea o actualiza la base de datos con los datos de países mapeados
            const createOrUpdateDbCountries = await Country.bulkCreate(loadCountriesData);
            console.log("Database created or updated");
            return createOrUpdateDbCountries;
        }

        // Si ya hay países creados, no es necesario realizar ninguna acción
        return;
    } catch (error) {
        // Si hay algún problema al obtener o sincronizar los datos de países, se lanza un error
        console.error("Error getting or syncing database:", error);
        throw error;
    }
};

module.exports = countrySync;