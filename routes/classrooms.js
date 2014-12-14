/**
 * Created by alehatsman on 12/14/14.
 */

var express = require('express'),
  router = express.Router(),
  classroom = require('../models/classroom.js');

router.get('/', function(req, res) {
  classroom.list(function(err, result) {
    if(err) {
      res.status(404);
      return res.json(err);
    }
    res.json(result.rows);
  });
});

module.exports = router;