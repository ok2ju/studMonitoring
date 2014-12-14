/**
 * Created by alehatsman on 12/14/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {
  save : function(schedule, callback) {
    var s = schedule;
    var sql = "insert into Schedule " +
      "values($1, $2, $3, $4, $5);";
    s.week_day = new Date(s.week_day);
    s.time = new Date(s.time);
    s.week_day.setHours(s.time.getHours(), s.time.getMinutes());
    pg.executeSql(sql, [s.id_classroom, s.id_subject, s.id_class, s.id_teacher, s.week_day], callback);
  }
};
