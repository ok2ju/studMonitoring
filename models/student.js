/**
 * Created by alehatsman on 12/2/14.
 */
var pg = require('../utils/pgwrapper.js');

var student = {};

student.list = function(callback) {
  var sql = 'select s.id_student, s.name, s.surname, dateEnrollment, street, gender, '+
  'city, state, class_number, class_character '+
  'from Student s, Address, Class '+
  'where s.id_address = Address.id_address and '+
  's.id_class = Class.id_class;';

  pg.executeSql(sql, callback);
};

student.find = function(id, callback) {
  var sql = 'select s.id_student, s.name, s.surname, dateEnrollment, street, gender, '+
    'city, state, class_number, class_character '+
    'from Student s, Address, Class '+
    'where s.id_address = Address.id_address and '+
    's.id_class = Class.id_class and s.id_student = $1;';

  pg.executeSql(sql, [id], callback);
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

student.save = function(student, callback) {
  var s = student;
  var sql = "insert into Student(name, surname, gender, dateEnrollment, id_elder, id_address, id_class) " +
    "values($1, $2, $3, TO_DATE($4, 'yyyy-mm-dd'), $5, $6, $7);";

  pg.executeSql(sql, [s.name, s.surname, s.gender, s.dateEnrollment, s.idElder, s.idAddress, s.idClass], callback);
};

module.exports = student;
