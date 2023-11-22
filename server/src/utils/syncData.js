const axios = require('axios')
const {Country} = require('../db')


const countrySync = async () =>{
    const URL_API =  "http://localhost:5000/countries";
    try {
                //? se consulta si hay paises creados , sino se procede a crearlos
        const countryExist = await Country.findAll()
        if(countryExist.length === 0){
            const reponse = await axios.get(URL_API)
            const countries = reponse.data


                //? map de propiedades y se crea un array para luego hacer un bulkcreate
            const loadCountriesData = countries.map((country) =>{
                console.log("entrando en el map")
                return{
                    id: country.cca3,
                    name: country.name.common,
                    flagImage: country.flags.png,
                    coatOfArms: country.coatOfArms.png,
                    continent: country.continents[0],
                    capital: country.capital ? country.capital[0] : "-",
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                }
                
            })
            const createDbCountry = await Country.bulkCreate(loadCountriesData);
            console.log("DataBase Creada");
            return createDbCountry
        }
        return
    } catch (error) {
        console.log("Error al obtener Base de datos: ", error)
        throw error
    }



};

module.exports = countrySync;