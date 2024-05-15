const router = require('express').Router();
const userRoutes = require('./userRoutes')
const profileRoutes = require('./profileRoutes')
const huddleRoutes = require('./huddleRoutes');


router.use('/users', userRoutes);
router.use('/huddle', huddleRoutes);
router.use('/profile', profileRoutes);


module.exports = router; 