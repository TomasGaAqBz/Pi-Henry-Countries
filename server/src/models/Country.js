const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate:{
        len:{
          args:[3,3]
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImage: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    coatOfArms:{
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true      
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull:true
     
    },
    area: {type: DataTypes.FLOAT,
      
    },
    population: {type: DataTypes.INTEGER,
      allowNull:false,
    },
  });
};