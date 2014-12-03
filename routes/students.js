/**
 * Created by alehatsman on 12/3/14.
 */
var express = require('express'),
    router = express.Router(),
    student = require('../models/student.js');

router.get('/', function(request, responce) {
  student.list(function(err, result) {
    if(err) {
      return responce.send(err);
    }
    responce.json(result.rows);
  });
});

router.get('/:klass', function(request, responce) {
  var klass = request.params.klass;
  student.classlist(klass, function(err, result) {
    if(err) {
      return responce.send(err);
    }
    responce.json(result.rows);
  });
});

module.exports = router;