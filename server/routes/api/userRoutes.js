const router = require('express').Router();
const User = require('../../models/user');
const withAuth = require('../../utils/auth');

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
router.get('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ['id', 'username'],
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
  // console.log(req.headers)
  console.log(req.body)
    try {
      const userData = await User.create({
        username: req.body.username,
        password: req.body.password
      });

      //creating a structured response object  
      const response = {
        user: {
          id: userData.id,
          username: userData.username
        },
        message: 'Account created!'
      };

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        res.status(200).json(response);
      });
        // res.status(200).json(userData);
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({message: 'Username is already taken.'})
      } else {
        res.status(500).json({message: 'Failed to create user.'});
      }
      
    }
  });

  //may want to inject withAuth here so only logged-in users can delete their accounts
  router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id
        },
      });
  
      if (!userData) {
        res.status(404).json({message: 'No user with this id!'});
        return;
      }

      req.session.destroy((err) => {
        if (err) {
          res.status(500).json({message: 'User deleted but failed to destroy session!'})
        } else {
          res.status(200).json({message: 'User successfully deleted and session destroyed!'});
        }
      });
  
    } catch (error) {
      res.status(500).json(error);
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
    try {
      if (req.session.loggedIn) {
        req.session.destroy((err) => {
          if (err) {
            res.status(500).json({error: 'Failed to destroy session'});
          } 
          res.status(204).end();
        });
      } else {
        res.status(404).json({error: 'User not logged in'})
      }

    } catch (error) {
      res.status(500).json({error: 'Failed to logout:', details: error.message});
    }

  });



module.exports = router; 

