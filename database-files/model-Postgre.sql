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
	login text,
	password text,
	street text,
    city text default 'Гродно',
    state text default 'Беларусь'
);

create table Student
(
	id_student SERIAL PRIMARY KEY,
	dateEnrollment date,
	id_elder integer,
	id_class integer not null,
	constraint FK_STUDENT_STUDENT foreign key (id_elder) references Student (id_student),
	constraint FK_STUDENT_CLASS foreign key (id_class) references Class (id_class)
) INHERITS (Person);

create table Teacher
(
	id_teacher integer PRIMARY KEY
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

create table Schedule 
(
	id_classroom integer,
	id_subject integer,
	id_class integer,
	id_teacher integer,

	constraint FK_SCHEDULE_SUBJECT foreign key (id_subject) references Subject (id_subject),
	constraint FK_SCHEDULE_CLASSROOM foreign key (id_classroom) references Classroom (id_classroom),
	constraint FK_SCHEDULE_CLASS foreign key (id_class) references Class (id_class),
	constraint FK_SCHEDULE_TEACHER foreign key (id_teacher) references Teacher (id_teacher)
);