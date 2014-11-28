/* --------------- Возвращает средний балл(годовой) по предмету --------------- */
drop function avgMark(text, text);

create function avgMark(surname text, subject text) returns numeric
	as $$ 
	declare n numeric;
	begin
		select avg(mark) into n
		from Marks, Student, Subject
		where Marks.id_student = Student.id_student and
			  Marks.id_subject = Subject.id_subject and
			  Student.surname = $1 and
			  Subject.title = $2;
			  
		return n;
	end;
	$$ language plpgsql;

SELECT * FROM avgMark('Petrov', 'Математика');

/* --------------- Высчитывает сдерний балл класса по предмету --------------- */
drop function avgMarkInClass(integer, char, text);

create function avgMarkInClass(classNumber integer, classChar char, subject text) returns numeric
	as $$ 
	declare n numeric;
	begin
		select avg(mark) into n
		from Marks, Student s, Subject, Class
		where s.id_class = Class.id_class and
				Marks.id_student = s.id_student and
				Marks.id_subject = Subject.id_subject and
				Class.class_number = $1 and Class.class_character = $2 and
				Subject.title = $3;
			  
		return n;
	end;
	$$ language plpgsql;

SELECT * FROM avgMarkInClass(7, 'А', 'Математика');