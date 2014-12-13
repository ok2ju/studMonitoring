/**
 * Created by alehatsman on 12/13/14.
 */
var pg = require('../utils/pgwrapper.js');

var persone = {};

persone.findByUsername = function(username, callback) {
  var sql = "select username, role from persone where username = $1";

  pg.executeSql(sql, [username], callback);
};