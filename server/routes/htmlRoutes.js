const router = require('express').Router();

const path = require('path');

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
})

module.exports = router;