
/* ----------- Subjects ------------------- */
insert into Subject values(1, 'Математика');
insert into Subject values(2, 'Информатика');
insert into Subject values(3, 'Биология');
insert into Subject values(4, 'История');

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
insert into Student(id, name, surname, username, password, gender, dateEnrollment, id_elder, id_class, street, role) values(1, 'Dima', 'Petrov', 'dima', 'dima', 'M', TO_DATE('1994-05-03', 'yyyy-mm-dd'), 1, 1, 'Кленовая', 'student');

insert into Student(id, name, surname, username, password, gender, dateEnrollment, id_elder, id_class, street, role) values(2, 'Petya', 'Kartoshkin', 'login1', 'pass1', 'M', TO_DATE('1994-01-04', 'yyyy-mm-dd'), 1, 4, 'Щорса', 'student');

/* ----------- Teacher ---------------- */
insert into Teacher(id, name, surname, gender) values(1, 'Alexander', 'Pavlov', 'M');

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
insert into Classroom values(1, 101, 1, 'ул.Щорса');
insert into Classroom values(2, 200, 2, 'ул.Щорса');
insert into Classroom values(3, 250, 3, 'ул.Щорса');

/* ------------- Schedule -------------- 
insert into Schedule values(1, 1, 1, 1, 1, 1);
insert into Schedule values(1, 1, 2, 2, 1, 1);
*/