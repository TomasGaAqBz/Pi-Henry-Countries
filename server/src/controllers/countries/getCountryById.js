const { Country, Activity } = require("../../db");


// 📍 GET | /countries/:id Pais Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país). Tiene que incluir los datos de las actividades turísticas asociadas a este país.
const getCountryById = (req,res) =>{
    res.send('Obetniendo Paises por ID')
}

module.exports = getCountryById;