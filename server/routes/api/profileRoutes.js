const router = require('express').Router();
const { User, Huddle } = require('../../models');
const withAuth = require('../../utils/auth');

//get user profile page
router.get('/profile', async (req, res) => {
    try {
        const userData = await User.findByPk({
            attributes: {exclude: ['password']},
            include: [{model: Huddle}],
        });

        const user = userData.get({plain: true})

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (error) {
        res.status(505).json(error)
    }
})