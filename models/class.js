/**
 * Created by alehatsman on 12/5/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {
  list : function(callback) {
    var sql = "select id, class_number, class_character from Class;";

    pg.executeSql(sql, callback);
  }
};