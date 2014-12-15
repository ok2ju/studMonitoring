/**
 * Created by alehatsman on 12/14/14.
 */
var express = require('express'),
  router = express.Router(),
  schedule = require('../models/schedule.js');

router.post('/', function(req, res) {
  schedule.save(req.body, function(err, result) {
    if(err) {
      res.status(404);
      return res.json(err);
    }
    res.json(result);
  });
});

router.get('/class/:id', function(req, res) {
  var id = req.params.id;
  schedule.list(id, function(err, result) {
    if(err) {
      res.status(404);
      return res.json(err);
    }
    res.json(result.rows);
  });
});

module.exports = router;