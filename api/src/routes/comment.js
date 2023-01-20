const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/create', auth, (req, res) => {

})

router.get('/all', auth, (req, res) => {

});

router.post('/like', auth, (req, res) => {

});

module.exports = router