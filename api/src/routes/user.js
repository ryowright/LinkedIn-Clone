const router = require('express').Router();
// const sequelize = require('../database');
const auth = require('../middleware/auth');

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.post('/logout', auth, (req, res) => {

});

router.get('/me', auth, (req, res) => {

});

module.exports = router