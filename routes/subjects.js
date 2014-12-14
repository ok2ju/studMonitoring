/**
 * Created by alehatsman on 12/14/14.
 */
var express = require('express'),
    router = express.Router(),
    subject = require('../models/subject');

router.get('/', function(req, res) {
  subject.list(function(err, result) {
    if(err) {
      res.status(404);
      return res.json(err);
    }
    res.json(result.rows);
  });
});

module.exports = router;