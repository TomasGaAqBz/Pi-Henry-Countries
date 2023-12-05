const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const countrySync = require('./src/utils/syncData.js');

// Variable para controlar el puerto
const PORT = 3001;

server.listen(PORT, async () => {
  // Configuración para levantar el servidor en el puerto 3001
  console.log(`Server levantado en el puerto ${PORT}`);

  try {
    // Sincroniza Sequelize con la base de datos
    await conn.sync({ force: false });

    // Sincroniza los datos de países desde una API externa a la base de datos local
    await countrySync();

    // Mensaje de éxito si la sincronización fue exitosa
    console.log("Successful synchronization");
  } catch (error) {
    // Manejo de errores en caso de problemas durante la sincronización
    console.log("We have a problem:", error);
  }
});