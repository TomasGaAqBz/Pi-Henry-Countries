const {Country,Activity} = require('../../db')

// se va a encargar de traer todos los paises


//  GET | /countries Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const getAllCountry = async () =>{
    try {
        const countries = await Country.findAll()
        console.log("se pudo obtener los datos de todos los paises")
        return countries
    } catch (error) {
        throw new Error('No se pudo obtener los datos de todos los paises')
    }



}



module.exports = getAllCountry;