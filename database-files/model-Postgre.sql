create table Address 
(
	id_address integer PRIMARY KEY,
	street text,
	city text default 'Гродно',
	state text default 'Беларусь'
);

create table Subject 
(
	id_subject integer PRIMARY KEY,
	title text
	constraint TITLE_SUBJECT_CONSTRAINT check (title in ('Математика', 'Информатика', 'Биология', 'История'))
);

create table Class
(
	id_class integer PRIMARY KEY,
	class_number integer 
	constraint NUMBER_CLASS_CONSTRAINT check (class_number between 1 and 11),
	class_character text
	constraint CHARACTER_CLASS_CONSTRAINT check (class_character in ('А', 'Б', 'В', 'Г'))
);

create table Person
(
	name text,
	surname text,
	gender text
	check (gender in('M', 'F')),
	street text,
    city text default 'Гродно',
    state text default 'Беларусь'
);

create table Student
(
	id_student SERIAL PRIMARY KEY,
	dateEnrollment date,
	id_elder integer,
	id_address integer,
	id_class integer not null,
	constraint FK_STUDENT_ADDRESS foreign key (id_address) references Address (id_address),
	constraint FK_STUDENT_STUDENT foreign key (id_elder) references Student (id_student),
	constraint FK_STUDENT_CLASS foreign key (id_class) references Class (id_class)
) INHERITS (Person);

create table Teacher
(
	id_teacher integer PRIMARY KEY,
	id_address integer,
	constraint FK_TEACHER_ADDRESS foreign key (id_address) references Address (id_address)
) INHERITS (Person);

create table Truancy 
(
	id_truancy integer PRIMARY KEY,
	date_truancy date,
	reason text
	constraint REASON_TRUANCY_CONSTRAINT check (reason in ('Прогул', 'По болезни', 'Письменное распоряжение')),
	id_subject integer,
	id_student integer not null,
	constraint FK_TRUANCY_SUBJECT foreign key (id_subject) references Subject (id_subject),
	constraint FK_TRUANCY_STUDENT foreign key (id_student) references Student (id_student)
);

create table Marks 
(
	id_marks integer PRIMARY KEY,
	mark integer
	constraint MARK_MARKS_CONSTRAINT check (mark between 1 and 10),
	semester integer
	constraint SEMESTER_MARKS_CONSTRAINT check (semester between 1 and 4),
	id_subject integer,
	id_student integer not null,
	constraint FK_MARKS_SUBJECT foreign key (id_subject) references Subject (id_subject),
	constraint FK_MARKS_STUDENT foreign key (id_student) references Student (id_student)
);

create table Teacher_Subject 
(
	id_teacher integer not null,
	id_subject integer not null,
	constraint PK_TEACHER_SUBJECT primary key (id_teacher, id_subject),
	constraint FK_TEACHER_SUBJECT_TEACHER foreign key (id_teacher) references Teacher (id_teacher),
	constraint FK_TEACHER_SUBJECT_SUBJECT foreign key (id_subject) references Subject (id_subject)
);

create table Classroom 
(
	id_classroom integer PRIMARY KEY,
	classroom_number integer
	constraint NUMBER_CLASSROOM_CONSTRAINT check (classroom_number between 100 and 300),
	floor integer
	constraint FLOOR_CLASSROOM_CONSTRAINT check (floor between 1 and 3),
	building text
);

create table WeekDay 
(
	id_day integer PRIMARY KEY
	constraint DAY_WEEKDAY_CONSTRAINT check (id_day between 1 and 7),
	day_name text
	constraint DAYNAME_WEEKDAY_CONSTRAINT check (day_name in ('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'))
);

create table LessonTime 
(
	lesson_number integer PRIMARY KEY,
	start_lesson text,
	end_lesson text
);

create table Schedule 
(
	id_classroom integer,
	id_day integer,
	lesson_number integer,
	id_subject integer,
	id_class integer,
	id_teacher integer,
	constraint FK_SCHEDULE_SUBJECT foreign key (id_subject) references Subject (id_subject),
	constraint FK_SCHEDULE_CLASSROOM foreign key (id_classroom) references Classroom (id_classroom),
	constraint FK_SCHEDULE_LESSONTIME foreign key (lesson_number) references LessonTime (lesson_number),
	constraint FK_SCHEDULE_CLASS foreign key (id_class) references Class (id_class),
	constraint FK_SCHEDULE_WEEKDAY foreign key (id_day) references WeekDay (id_day),
	constraint FK_SCHEDULE_TEACHER foreign key (id_teacher) references Teacher (id_teacher)
);