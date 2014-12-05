/**
 * Created by alehatsman on 12/5/14.
 */
/**
 * Created by alehatsman on 12/3/14.
 */
var express = require('express'),
  router = express.Router(),
  klass = require('../models/class.js');

router.get('/', function(request, responce) {
  klass.list(function(err, result) {
    if(err) {
      return responce.send(err);
    }
    responce.json(result.rows);
  });
});

module.exports = router;