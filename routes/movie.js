  
var express = require('express');
var router = express.Router();

// Require controller modules.
var movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET request for search movies
router.get('/search', movieController.search);

// Display detail page for a specific movie.
router.get('/detail', movieController.detail);

module.exports = router;