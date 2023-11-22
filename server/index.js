const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const countrySync = require('./src/utils/syncData')


const PORT = 3001;


server.listen(PORT, async () => { //* config para levantar el server en el puerto 3001
  console.log(`Server levantado en el puerto ${PORT}`);

  try {
    await conn.sync({ force: true }) //* sincro de Sequilize con DB
    
    await countrySync();

    console.log("Sincro Perfecta");
    // await Funcion para sincronizar DB

  } catch (error) {
    
    console.log("tenemos un problema",error )
  }
  

})

