/**
 * Created by alehatsman on 12/14/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {

  list : function(callback) {
    var sql = "select id, name, surname, username, role from teacher;";

    pg.executeSql(sql, callback);
  }

};