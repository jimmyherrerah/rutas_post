var express = require('express');
var router = express.Router();

var personaRoutes = require('./persona');
router.use('/route', personaRoutes),

module.exports = router;
