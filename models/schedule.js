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
  },

  list : function(classId, callback) {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(last)).toUTCString();

    var sql = "select week_day, classroom_number, title, "+
      "class_number, class_character, t.name, t.surname, "+
      "count(*) over (partition by to_char(week_day, 'yyyy:mm:dd')) as number_of_lessons " +
      "from Classroom, Subject, Class, Teacher t, Schedule "+
      "where Schedule.id_classroom = Classroom.id and "+
      "Schedule.id_subject = Subject.id and "+
      "Schedule.id_class = Class.id and "+
      "Schedule.id_teacher = t.id and "+
      "Class.id = $1 and "+
      "(Schedule.week_day >= $2 and Schedule.week_day <= $3) " +
      "group by week_day, classroom_number, title, class_number, class_character, t.name, t.surname "+
      "order by 1 asc";

    pg.executeSql(sql, [classId, firstday, lastday], callback);
  }
};
