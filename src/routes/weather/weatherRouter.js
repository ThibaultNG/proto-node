const express = require('express')
const router = express.Router()

const { wOne, wTwo} = require('../../controllers/weather/weatherGet');
router.get('/wOne', wOne);
router.get('/wTwo', wTwo);

module.exports = router