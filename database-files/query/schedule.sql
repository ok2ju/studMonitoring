create type chedule_type as (
	weekDay timestamp,
	classroomNumber integer,
	title text,
	classNumber integer,
	classLetter text,
	name text,
	surname text,
	middlename text,
	lessonNumber bigint
);

create function scheduleList(integer, timestamp, timestamp) returns setof chedule_type as $$
	select week_day as weekDay, Classroom.number as classroomNumber, title,
		Class.number as classNumber, Class.letter as classLetter, t.name, t.surname, t.middlename,
		count(*) over (partition by to_char(week_day, 'yyyy:mm:dd')) as lessonNumber  
	from Classroom, Subject, Class, Teacher t, Schedule 
	where Schedule.id_classroom = Classroom.id and 
		Schedule.id_subject = Subject.id and 
		Schedule.id_class = Class.id and 
		Schedule.id_teacher = t.id and 
		Class.id = $1 and 
		(Schedule.week_day >= $2 and Schedule.week_day <= $3)  
	group by week_day, classroomNumber, title, classNumber, classLetter, t.name, t.surname, t.middlename
	order by 1 asc
$$ language sql;