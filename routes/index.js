var express = require('express');
var router = express.Router();
//add a post route for the "Create" in CRUD operations
router.post('/', function(req, res) {
  res.send('You successfully created a POST route!');
});
//add a get route for the "Read" in CRUD operations
router.get('/', function(req, res) {
  res.send('You successfully created a GET route!');
});
//add a put route for the "Update" in CRUD operations
router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});
//add a delete route for the "Delete" in CRUD operations
router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});
module.exports = router;
