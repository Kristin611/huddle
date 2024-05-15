const router = require('express').Router();
const { User, Huddle } = require('../../models');
const withAuth = require('../../utils/auth');


//create a huddle
router.post('/', async (req, res) => {
    try {
        const huddleData = await Huddle.create({
            huddleTitle: req.body.huddleTitle,
            huddleText: req.body.huddleText,
            author: req.body.author

        });

        res.status(200).json(huddleData);

    } catch (error) {
        res.status(400).json(error)
    }
});

//get all huddles
router.get('/', async (req, res) => {
    try {
        const huddleData = await Huddle.findAll();

        res.status(200).json(huddleData);

    } catch (error) {
        console.error('Error retrieving huddles:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

//get one huddle 
router.get('/:id', async (req, res) => {
    try {
        const huddleData = await Huddle.findByPk(req.params.id);

        if (!huddleData) {
        res.status(404).json({message: 'No Huddle with this id!'});
        return;
    }

        res.status(200).json(huddleData);

    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router; 