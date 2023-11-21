const { Router } = require("express");
//export de rutas
const countryRouter = require('./countryRouter')
const activityRouter = require('./activityRouter')

const router = Router();

//middleware

router.use('/country',countryRouter);
router.use('/activity',activityRouter);



module.exports = router;
