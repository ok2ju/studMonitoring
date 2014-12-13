/**
 * Created by alehatsman on 12/2/14.
 */
var pg = require('../utils/pgwrapper.js');

var student = {};

student.list = function(callback) {
  var sql = 'select s.id, s.name, s.surname, dateEnrollment, s.state, s.street, s.city, '+
    'class_number, class_character '+
    'from Student s, Class '+
    'where s.id_class = Class.id;';

  pg.executeSql(sql, callback);
};

//todo refactor this broken method
student.classlist = function(klass, callback) {
  var sql = "select s.name, s.surname, dateEnrollment, " +
    "class_number, class_character " +
    "from Student s, Class " +
    "where s.id_class = Class.id and Class.class_number = 7 and "+
    "Class.class_character = $1;";

  pg.executeSql(sql, [klass], callback);
};

student.save = function(student, callback) {
  var s = student;
  var sql = "insert into Student(name, surname, gender, dateEnrollment, id_elder, id_class, state, city, street) " +
    "values($1, $2, $3, TO_DATE($4, 'yyyy-mm-dd'), $5, $6, $7, $8, $9);";

  pg.executeSql(sql, [s.name, s.surname, s.gender, s.dateEnrollment, s.idElder, s.idClass, s.state, s.city, s.street], callback);
};

student.find = function(id, callback) {
  var sql = 'select s.id, s.name, s.surname, dateEnrollment, gender, '+
    'class_number, class_character, state, city, street '+
    'from Student s, Class '+
    'where s.id_class = Class.id and s.id = $1;';

  pg.executeSql(sql, [id], callback);
};

module.exports = student;
