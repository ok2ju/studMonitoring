/**
 * Created by alehatsman on 12/14/14.
 */
var pg = require('../utils/pgwrapper.js');

module.exports = {
  save : function(schedule, callback) {
    var s = schedule;
    var sql = "insert into Schedule " +
      "values($1, $2, $3, $4, $5);";
    s.weekDay = new Date(s.weekDay);
    s.time = new Date(s.time);
    s.weekDay.setHours(s.time.getHours(), s.time.getMinutes());
    pg.executeSql(sql, [s.classroomId, s.subjectId, s.classId, s.teacherId, s.weekDay], callback);
  },

  list : function(classId, callback) {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstDay = new Date(curr.setDate(first));
    var lastDay = new Date(curr.setDate(last));

    var sql = "select * from scheduleList($1, $2, $3);";

    pg.executeSql(sql, [classId, firstDay, lastDay], callback);
  }
};
