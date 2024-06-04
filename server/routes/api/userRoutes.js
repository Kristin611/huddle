const router = require('express').Router();
const User = require('../../models/user');

//the '/api/users' endpoint

//GET all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll()
        // console.log(allUsers)
        res.status(200).json(allUsers)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({error: 'Internal server error'})
    }
})

//Get a single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ['username'],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user with this id!'});
      return;
    }
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json(error);
  }
})

//create user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        password: req.body.password
      });
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.username = userData.username;
    //     req.session.logged_in = true;
    //     res.status(200).json(userData);
    //   });
        res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/login', async (req, res) => {
  try {
    // const { username, password } = req.body; 

    // console.log('Request body:', req.body); //log the request body

    const userData = await User.findOne({
      where: { username: req.body.username},
    });
    console.log('user data:', userData) //log retreived user data
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Invalid password, please try again' });
    }
     
    req.session.save(() => {
      console.log('Session', req.session);
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
     
      return res.status(200).json({
        user: {
          id: userData.id,
          username: userData.username 
          },
        message: 'You are now logged in!',
      });
    });

      // res.setHeader('Content-Type', 'application/json')

      //   res.status(200).json({
      //   user: {
      //     id: userData.id,
      //     username: userData.username
      //   },
      //   message: 'You are now logged in!',
      // });

      //console.log('response headers:', res.getHeaders())

  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({message: 'Internal server error'});
  }
});

router.post('/logout', (req, res) => {
    // if (req.session.logged_in) {
    //   req.session.destroy(() => {
    //     res.status(204).end();
    //   });
    req.session.destroy(() => {
            res.status(204).end();
    })
    // } else {
    //   res.status(404).end();
    // }
  });

// router.post('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.status(204).end();
//   })
// })



module.exports = router; 

