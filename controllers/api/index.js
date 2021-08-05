const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const propietyRoutes = require('./propiety-routes');
router.use('/users', userRoutes);
router.use('/ppropieties', propietyRoutes);

module.exports = router;