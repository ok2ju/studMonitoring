/**
 * Created by alehatsman on 12/5/14.
 */
var pg = require('../utils/pgwrapper.js');

var klass = {};

klass.list = function(callback) {
  var sql = "select id_class, class_number, class_character from Class;";

  pg.executeSql(sql, callback);
};

module.exports = klass;
