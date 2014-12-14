/**
 * Created by alehatsman on 12/14/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {

  list : function(callback) {
    var sql = "select id, title from subject;";
    pg.executeSql(sql, callback);
  }

};