const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('country', {
    // ID del país
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 3],
          msg: 'The ID must contain exactly 3 letters.',
        }
      },
    },
    // Nombre del país
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // URL de la bandera del país
    flagImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Continente del país
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // URL del escudo de armas del país
    coatOfArms: {
      type: DataTypes.STRING,
    },
    // Capital del país
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Subregión del país
    subregion: {
      type: DataTypes.STRING,
    },
    // Área del país
    area: {
      type: DataTypes.FLOAT,
    },
    // Población del país
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false, // No incluir marcas de tiempo en las filas
  });
};