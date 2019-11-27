'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. from the router function */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
