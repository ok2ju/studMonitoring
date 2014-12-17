/**
 * Created by alehatsman on 12/2/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {
  list : function(callback) {
    var sql = 'select * from studentList;';
    pg.executeSql(sql, callback);
  },

  save : function(student, callback) {
    var s = student;
    var sql = "insert into Student(name, surname, middlename, phone, username, password, gender, " +
      "email, dob, id_elder, id_class, state, city, street, role) " +
      "values($1, $2, $3, $4, $5, $6, $7, $8, TO_DATE($9, 'yyyy-mm-dd'), $10, $11, $12, $13, $14, 'student');";

    pg.executeSql(sql, [s.name, s.surname, s.middlename, s.phone, s.username, s.password, s.gender,
      s.email, s.dob, s.idElder, s.idClass, s.state, s.city, s.street], callback);
  },

  find : function(id, callback) {
    var sql = 'select * from studentList where studentList.id = $1;';
    pg.executeSql(sql, [id], callback);
  }
};