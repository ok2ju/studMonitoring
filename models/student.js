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

student.save = function(student, callback) {
  var sql = "insert into Student(name, surname, gender, dateEnrollment, id_elder, id_address, id_class) " +
    "values($1, $2, $3, TO_DATE($4, 'yyyy-mm-dd'), $5, $6, $7);";
  pg.withConnection(function(err, client, done) {
    if(err) {
      return callback(err);
    }
    selectClassId(client, student.classNumber, student.classChar, function(err, classId) {
      if(err) {
        return callback(err);
      }
      var s = student;
      s.idClass = classId;
      s.idAddress = 1;
      s.idElder = 1;
      client.query(sql, [s.name, s.surname, s.gender, s.dateEnrollment, s.idElder, s.idAddress, s.idClass], callback);
    });
  });
};

function selectClassId(client, classNumber, classChar, callback) {
  var selectClassIdSql = "select id_class from Class " +
    "where class_number = $1 and " +
    "class_character = $2;";

  client.query(selectClassIdSql, [classNumber, classChar], function(err, result) {
    if(err) {
      return callback(err);
    }
    var idClass = result.rows[0].id_class;
    callback(err, idClass);
  });
}


module.exports = student;
