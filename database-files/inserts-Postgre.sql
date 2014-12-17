
/* ----------- Subjects ------------------- */
insert into Subject(title) values('Математика');
insert into Subject(title) values('Информатика');
insert into Subject(title) values('Биология');
insert into Subject(title) values('История');
insert into Subject(title) values('Алгебра');
insert into Subject(title) values('Геометрия');



/* ------------ Class -------------------- */
insert into Class values(1, 7, 'А');
insert into Class values(2, 8, 'А');
insert into Class values(3, 9, 'А');
insert into Class values(4, 10, 'А');
insert into Class values(5, 11, 'А');
insert into Class values(6, 7, 'Б');
insert into Class values(7, 8, 'Б');
insert into Class values(8, 9, 'Б');
insert into Class values(9, 10, 'Б');
insert into Class values(10, 11, 'Б');

/* ------------ Students -------------------- */
insert into Student(id, name, surname, middlename, phone, username, password, gender, email, dateEnrollment, id_elder, id_class, street, role)
values(1, 'Dima', 'Petrov', 'Vladimirovich', '234234','dima', 'dima', 'M', 'dima@mail.ru', TO_DATE('1994-05-03', 'yyyy-mm-dd'), 1, 1, 'Кленовая', 'student');

insert into Student(id, name, surname, middlename, phone, username, password, gender, email, dateEnrollment, id_elder, id_class, street, role)
values(2, 'Petya', 'Kartoshkin', 'Vladimirovich', '234234', 'login1', 'pass1', 'M', 'lada@mail.ru', TO_DATE('1994-01-04', 'yyyy-mm-dd'), 1, 4, 'Щорса', 'student');

/* ----------- Teacher ---------------- */
insert into Teacher(id, name, surname, middlename, phone, gender, username, password, role)
values(1, 'Alexander', 'Pavlov', 'Stepanovich', '234252', 'M', 'teacher', 'teacher', 'teacher');
insert into Teacher(id, name, surname, middlename, phone, gender, username, password, role)
values(2, 'Лада', 'Рудикова', 'Владимировна', '3223512', 'M', 'lada', 'lada', 'teacher');

/* ----------- Marks ------------------- 
insert into Marks values(1, 10, 1, 1, 1);
insert into Marks values(2, 9, 1, 2, 1);
insert into Marks values(3, 9, 1, 3, 1);
insert into Marks values(4, 8, 1, 4, 1);
insert into Marks values(5, 9, 2, 4, 1);
insert into Marks values(6, 8, 2, 1, 1);
*/

/* ----------- Truancy ---------------- */
insert into Truancy values(1, TO_DATE('2003-05-03', 'yyyy-mm-dd'), 'Прогул', 1, 1);
insert into Truancy values(2, TO_DATE('2003-06-01', 'yyyy-mm-dd'), 'По болезни', 2, 1);
insert into Truancy values(3, TO_DATE('2003-02-04', 'yyyy-mm-dd'), 'Письменное распоряжение', 3, 1);

/* ----------- Classroom -------------- */
insert into Classroom values(1, 101, 1);
insert into Classroom values(2, 200, 2);
insert into Classroom values(3, 250, 3);

/* ------------- Schedule -------------- 
insert into Schedule values(1, 1, 1, 1, "Wed, 17 Dec 2014 14:48:41 GMT");
insert into Schedule values(1, 1, 2, 2, "Wed, 17 Dec 2014 14:48:41 GMT");
*/