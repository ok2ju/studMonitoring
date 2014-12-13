/**
 * Created by alehatsman on 12/3/14.
 */
var express = require('express'),
    router = express.Router(),
    student = require('../models/student.js');

router.get('/', function(request, responce) {
  student.list(function(err, result) {
    responceWrapper(err, result.rows, responce);
  });
});

router.get('/:id', function(request, responce) {
  var id = request.params.id;
  console.log("StudentRouter - get id = " + id);
  student.find(id, function(err, result) {
    responceWrapper(err, result.rows[0], responce);
  });
});

router.get('/:klass', function(request, responce) {
  var klass = request.params.klass;
  student.classlist(klass, function(err, result) {
    responceWrapper(err, result.rows, responce);
  });
});

router.post('/', function(request, responce) {
  var s = request.body;
  student.save(s, function(err, result) {
    responceWrapper(err, result, responce);
  });
});

function responceWrapper(err, result, responce) {
  if(err) {
    return responce.send(err);
  }
  responce.json(result);
}

module.exports = router;