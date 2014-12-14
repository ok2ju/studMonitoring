/**
 * Created by alehatsman on 12/13/14.
 */
var pg = require('../utils/pgwrapper.js');

var person = {};

person.findByUsername = function(username, callback) {
  var sql = "select id, username, role, password from person where username = $1";

  pg.executeSql(sql, [username], callback);
};

module.exports = person;