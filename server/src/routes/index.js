const { Router } = require("express");

// Importación de rutas específicas
const countryRouter = require('./countryRouter');
const activityRouter = require('./activityRouter');

// Creación de un enrutador principal
const router = Router();

// Middleware: Asigna rutas específicas a los enrutadores correspondientes
router.use('/country', countryRouter);
router.use('/activity', activityRouter);

// Exportación del enrutador principal
module.exports = router;