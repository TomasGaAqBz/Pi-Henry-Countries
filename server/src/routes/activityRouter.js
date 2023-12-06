// Importar el módulo Router de Express
const activityRouter = require('express').Router();
const { Router } = require('express');
// Importar los controladores necesarios
const createActivities = require('../controllers/activity/createActivity.js');
const getActivities = require('../controllers/activity/getActivity.js');

// Ruta para crear una nueva actividad turística (POST /activities)
activityRouter.post('/', async (req, res) => {
    // Extraer datos del cuerpo de la solicitud (name, difficulty, duration, season, countries)
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        // Llamar al controlador para crear la actividad con los datos proporcionados
        const newActivity = await createActivities({
            name,
            difficulty,
            duration,
            season,
            countries,
        });

        // Enviar una respuesta exitosa si la actividad se crea correctamente
        res.status(200).send('Activity created successfully');
    } catch (error) {
        // Enviar una respuesta de error con el mensaje de error si la creación falla
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todas las actividades turísticas (GET /activities)
activityRouter.get('/', async (req, res) => {
    try {
        // Llamar al controlador para obtener todas las actividades
        const activity = await getActivities();

        // Verificar si hay actividades para mostrar
        if (activity.length === 0) {
            res.status(400).send('No activities to display');
        } else {
            // Enviar las actividades en formato JSON como respuesta
            res.status(200).json(activity);
        }
    } catch (error) {
        // Enviar una respuesta de error con el mensaje de error si la obtención falla
        res.status(400).json(error.message);
    }
});

// Exportar el enrutador de actividades
module.exports = activityRouter;