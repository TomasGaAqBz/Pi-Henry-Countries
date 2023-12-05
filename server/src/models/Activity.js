const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        // ID de la actividad (autoincremental)
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Nombre de la actividad
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Dificultad de la actividad (valor entre 1 y 5)
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
            },
            allowNull: false,
        },
        // Duración de la actividad (tipo de dato interger)
        duration: {
            type: DataTypes.INTEGER,
        },
        // Temporada de la actividad (verano, otoño, invierno, primavera)
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false,
        },
    });
};