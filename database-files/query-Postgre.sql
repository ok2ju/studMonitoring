/* --------- GROUP, HAVING ------------ */
/* выдает информацию об учениках, у которых средний(годовой) балл
по определенному предмету выше 8 и сортирует записи по имени ученика */
select s.name, s.surname, AVG(mark), semester, title
from Student s, Marks, Subject
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student and
Subject.title = 'История'
group by s.name, s.surname, semester, title
having AVG(mark) > 8
order by s.name;

/* --------- Информация об учениках ---------- */
select s.name, s.surname, dateEnrollment, street,
city, state, class_number, class_character
from Student s, Address, Class
where s.id_address = Address.id_address and
s.id_class = Class.id_class;

/* информация об учениках определенного класса */
select s.name, s.surname, dateEnrollment, street,
city, state, class_number, class_character
from Student s, Address, Class
where s.id_address = Address.id_address and
s.id_class = Class.id_class and Class.class_number = 7 and
Class.class_character = 'А';

/* информация об определенном ученике заданного класса */
select s.name, s.surname, dateEnrollment, street,
city, state, class_number, class_character
from Student s, Address, Class
where s.id_address = Address.id_address and
s.id_class = Class.id_class and Class.class_number = 7 and
Class.class_character = 'А' and s.surname = 'Petrov';

/* вся успеваемость учеников */
select mark, semester, title, s.name, s.surname
from Marks, Student s, Subject
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student;

/* успеваемость всех учеников за определенный семестр */
select mark, semester, title, s.name, s.surname
from Marks, Student s, Subject
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student and
Marks.semester = 1;

/* успеваемость определенного ученика за определенный семестр */
select mark, semester, title, s.name, s.surname
from Marks, Student s, Subject
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student and
Marks.semester = 1 and s.surname = 'Petrov';

/* успеваемость определенного ученика из определенного класса за заданный семестр */
select mark, semester, title, s.name, s.surname,
class_number, class_character
from Marks, Student s, Subject, Class
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student and
s.id_class = Class.id_class and
Marks.semester = 1 and s.surname = 'Petrov' and
Class.class_number = 7 and Class.class_character = 'А';

/* успеваемость всех учеников определенного класса за заданный семестр */
select mark, semester, title, s.name, s.surname,
class_number, class_character
from Marks, Student s, Subject, Class
where Marks.id_subject = Subject.id_subject and
Marks.id_student = s.id_student and
s.id_class = Class.id_class and
Marks.semester = 1 and
Class.class_number = 7 and Class.class_character = 'А';

/* ---------- Все прогулы ------------ */
select date_truancy, reason, title, s.name, s.surname,
class_number, class_character
from Truancy, Subject, Student s, Class
where Truancy.id_subject = Subject.id_subject and
Truancy.id_student = s.id_student and s.id_class = Class.id_class;

/* прогулы определенного ученика из заданного класса */
select date_truancy, reason, title, s.name, s.surname,
class_number, class_character
from Truancy, Subject, Student s, Class
where Truancy.id_subject = Subject.id_subject and
Truancy.id_student = s.id_student and s.id_class = Class.id_class and
s.surname = 'Petrov' and Class.class_number = 7 and
Class.class_character = 'А';

/* информация о всех учениках, пропустивших занятия по неуважительной причине */
select date_truancy, reason, title, s.name, s.surname,
class_number, class_character
from Truancy, Subject, Student s, Class
where Truancy.id_subject = Subject.id_subject and
Truancy.id_student = s.id_student and s.id_class = Class.id_class and
Truancy.reason = 'Прогул';

/* информация об учениках определенного класса, пропустивших занятия по неуважительной причине */
select date_truancy, reason, title, s.name, s.surname,
class_number, class_character
from Truancy, Subject, Student s, Class
where Truancy.id_subject = Subject.id_subject and
Truancy.id_student = s.id_student and s.id_class = Class.id_class and
Class.class_number = 7 and Class.class_character = 'А' and
Truancy.reason = 'Прогул';

/* прогулы определенного ученика из зданного класса по заданному предмету */
select date_truancy, reason, title, s.name, s.surname,
class_number, class_character
from Truancy, Subject, Student s, Class
where Truancy.id_subject = Subject.id_subject and
Truancy.id_student = s.id_student and s.id_class = Class.id_class and
s.surname = 'Petrov' and
Class.class_number = 7 and Class.class_character = 'А' and
Subject.title = 'Математика' and
Truancy.reason = 'Прогул';

/* ----------- Рассписание на неделю для заданного класса ---------- */
select day_name, classroom_number, title, start_lesson, end_lesson,
class_number, class_character, t.name, t.surname
from Classroom, WeekDay, LessonTime, Subject, Class, Teacher t, Schedule
where Schedule.id_classroom = Classroom.id_classroom and
Schedule.id_day = WeekDay.id_day and
Schedule.lesson_number = LessonTime.lesson_number and
Schedule.id_subject = Subject.id_subject and
Schedule.id_class = Class.id_class and
Schedule.id_teacher = t.id_teacher and
Class.class_number = 7 and Class.class_character = 'А';

/* ----------- Информация об учителе ---------- */
select t.name, t.surname, street,
city, state
from Teacher t, Address
where t.id_address = Address.id_address;

/* ------------ Рассписание для учителя -------------- */
select day_name, classroom_number, title, start_lesson, end_lesson,
class_number, class_character, t.name, t.surname
from Classroom, WeekDay, LessonTime, Subject, Class, Teacher t, Schedule
where Schedule.id_classroom = Classroom.id_classroom and
Schedule.id_day = WeekDay.id_day and
Schedule.lesson_number = LessonTime.lesson_number and
Schedule.id_subject = Subject.id_subject and
Schedule.id_class = Class.id_class and
Schedule.id_teacher = t.id_teacher and
t.surname = 'Pavlov';