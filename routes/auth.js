/**
 * Created by alehatsman on 12/14/14.
 */
var express = require('express'),
  router = express.Router(),
  auth = require('../services/auth');

router.post('/api/login', function(req, res) {
  auth.authenticate(req.body.username, req.body.password, function(err, userDetails) {
    if(userDetails) {
      req.session.regenerate(function() {
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = userDetails;
        res.status(200);
        res.send({
          id: userDetails.id,
          username: userDetails.username,
          role: userDetails.role
        });
      });
    } else {
      res.status(404);
      res.send('User not found');
    }
  });
});

router.get('/api/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.send('Logout');
  });
});

module.exports = router;