const activityRouter = require('express').Router();
const { Router } = require('express');
const createActivities = require('../controllers/activity/createActivity.js')
const getActivities = require('../controllers/activity/getActivity.js')

// POST | /activitiesEsta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
activityRouter.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try { 
        const newActivity = await createActivities( {          
            name,
            difficulty,
            duration,
            season,
            countries
        });
        
        res.status(200).send('Activity created successfully');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//📍 GET | /activities Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.





module.exports = activityRouter;