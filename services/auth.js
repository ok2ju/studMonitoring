/**
 * Created by alehatsman on 12/14/14.
 */
var person = require('../models/person.js');

module.exports = {
  authenticate: function authenticate(username, password, callback) {
    person.findByUsername(username, function(err, result) {
      if (err) {
        return callback(err);
      }
      var userDetails = result.rows[0];
      if (userDetails && userDetails.password === password) {
        return callback(err, userDetails);
      } else {
        return callback('User password does not match');
      }
    });
  },
  restrict: function(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.session.error = 'Access denied!';
      res.send(req.session.error);
    }
  }
};