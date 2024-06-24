const router = require('express').Router();
const { User, Huddle } = require('../../models');
const withAuth = require('../../utils/auth');


//create a huddle
router.post('/', async (req, res) => {
    try {
        const huddleData = await Huddle.create({
            huddleTitle: req.body.huddleTitle,
            huddleText: req.body.huddleText,
            author: req.body.author,
            user_id: req.body.user_id

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

//get huddles by user_id
router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const huddleData = await Huddle.findAll({
            where: {
                user_id: userId
            }
        });

        if (huddleData.length === 0) {
            res.status(404).json({message: 'No huddles found for this user!'});
            return;
        }

        res.status(200).json(huddleData)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const huddleData = await Huddle.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (!huddleData) {
            res.status(404).json({message: "No huddle found with this id!"});
            return;
        }

        res.status(200).json({message: 'Huddle deleted successfully!'})

    } catch (error) {
        console.error('Error deleting huddle:', error);
        res.status(500).json({message: 'An error occured while deleting this huddle.'});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const huddleData = await Huddle.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        //[0] is to check if any rows were affected
        if (!huddleData[0]) {
            res.status(404).json({message: 'No huddle found with this id!'});
            return;
        }

        res.status(200).json({message: 'Huddle updated successfully!'});

    } catch (error) {
        console.error('Error updating huddle:', error);
        res.status(500).json({message: 'An error occured while updating this huddle.'})
    }
});


module.exports = router; 