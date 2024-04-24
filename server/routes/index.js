const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes')

//Ensure that you're mounting your routes in the correct order. Middleware and routes are executed in the order they are mounted, so make sure that more specific routes are mounted before more general routes.
router.use('/api', apiRoutes)
router.use('/', htmlRoutes)


router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>')
})

module.exports = router;

//html routes handle routes related to rendering HTML pages or serving static assets, as well as serving client-side assets like CSS, JS, images, etc. It may handle routes like '/', '/about', '/contact', '/dashboard', etc., which correspond to different pages or views in your app.
//api routes handle routes related to providing data or performining operations on the server-side. They are used for implementing RESTful APIs or other types of web services to interact with the server programmatically like '/api/users', '/api/posts', etc., which correspond to different resources or endpoints. They often involve processing data (CRUD operations on a database), handling authentication/authorization, and responding with JSON data.