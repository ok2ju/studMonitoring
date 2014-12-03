/**
 * Created by alehatsman on 12/2/14.
 */
var pg = require('../utils/pgwrapper.js');

var student = {};

student.list = function(callback) {
  var sql = 'select s.name, s.surname, dateEnrollment, street, '+
  'city, state, class_number, class_character '+
  'from Student s, Address, Class '+
  'where s.id_address = Address.id_address and '+
  's.id_class = Class.id_class;';

  pg.executeSql(sql, callback);
};

student.classlist = function(klass, callback) {
  var sql = "select s.name, s.surname, dateEnrollment, street, " +
  "city, state, class_number, class_character " +
  "from Student s, Address, Class " +
  "where s.id_address = Address.id_address and "+
  "s.id_class = Class.id_class and Class.class_number = 7 and "+
  "Class.class_character = $1;";

  pg.executeSql(sql, [klass], callback);
};

module.exports = student;
