const router = require("express").Router();

router.use('/planets', require('./planet.routes'))
//router.use('/users', require('./user.routes'))

module.exports = router
