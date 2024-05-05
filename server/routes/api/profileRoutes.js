const router = require('express').Router();
const { User, Huddle } = require('../../models');
const withAuth = require('../../utils/auth');

//get user profile page
router.get('/profile/:id', async (req, res) => {
    try {

        const userId = req.user.id;  

        const userData = await User.findOne({
            where: {id: userId},
            attributes: {exclude: ['password']},
            include: [{model: Huddle}],
        });

        if (!userData) {
            return res.status(404).json({error: 'User not found'})
        }

        const user = userData.get({plain: true})

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
})