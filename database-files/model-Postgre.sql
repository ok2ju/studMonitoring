create table Subject
(
	id SERIAL PRIMARY KEY,
	title text
	constraint TITLE_SUBJECT_CONSTRAINT check (title in ('Математика', 'Информатика', 'Биология', 'История'))
);

create table Class
(
	id SERIAL PRIMARY KEY,
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
	login text,
	password text,
	street text,
    city text default 'Гродно',
    state text default 'Беларусь',
    role text
    check (role in('admin', 'student', 'teacher'))
);

create table Student
(
	id SERIAL PRIMARY KEY,
	dateEnrollment date,
	id_elder integer,
	id_class integer not null,
	constraint FK_STUDENT_STUDENT foreign key (id_elder) references Student (id),
	constraint FK_STUDENT_CLASS foreign key (id_class) references Class (id)
) INHERITS (Person);

create table Teacher
(
	id SERIAL PRIMARY KEY
) INHERITS (Person);

create table Truancy
(
	id SERIAL PRIMARY KEY,
	date_truancy date,
	reason text
	constraint REASON_TRUANCY_CONSTRAINT check (reason in ('Прогул', 'По болезни', 'Письменное распоряжение')),
	id_subject integer,
	id_student integer not null,
	constraint FK_TRUANCY_SUBJECT foreign key (id_subject) references Subject (id),
	constraint FK_TRUANCY_STUDENT foreign key (id_student) references Student (id)
);

create table Marks
(
	id SERIAL PRIMARY KEY,
	mark integer
	constraint MARK_MARKS_CONSTRAINT check (mark between 1 and 10),
	study_year integer,
	semester integer
	constraint SEMESTER_MARKS_CONSTRAINT check (semester between 1 and 4),
	id_subject integer,
	id_student integer not null,
	constraint FK_MARKS_SUBJECT foreign key (id_subject) references Subject (id),
	constraint FK_MARKS_STUDENT foreign key (id_student) references Student (id)
);

create table Teacher_Subject
(
	id_teacher integer not null,
	id_subject integer not null,
	constraint PK_TEACHER_SUBJECT primary key (id_teacher, id_subject),
	constraint FK_TEACHER_SUBJECT_TEACHER foreign key (id_teacher) references Teacher (id),
	constraint FK_TEACHER_SUBJECT_SUBJECT foreign key (id_subject) references Subject (id)
);

create table Classroom
(
	id serial PRIMARY KEY,
	classroom_number integer
	constraint NUMBER_CLASSROOM_CONSTRAINT check (classroom_number between 100 and 300),
	floor integer
	constraint FLOOR_CLASSROOM_CONSTRAINT check (floor between 1 and 3),
	building text
);

create table Schedule
(
	id_classroom integer,
	id_subject integer,
	id_class integer,
	id_teacher integer,
	week_day timestamp,

	constraint FK_SCHEDULE_SUBJECT foreign key (id_subject) references Subject (id),
	constraint FK_SCHEDULE_CLASSROOM foreign key (id_classroom) references Classroom (id),
	constraint FK_SCHEDULE_CLASS foreign key (id_class) references Class (id),
	constraint FK_SCHEDULE_TEACHER foreign key (id_teacher) references Teacher (id)
);