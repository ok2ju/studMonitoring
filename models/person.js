/**
 * Created by alehatsman on 12/13/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {
  findByUsername : function(username, callback) {
    var sql = "select * from personList where username = $1;";
    pg.executeSql(sql, [ username ], callback);
  }
};