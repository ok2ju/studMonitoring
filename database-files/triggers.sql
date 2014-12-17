-- Создание триггерной функции
-- if (select count(*) from Marks m where trim(m.id_student)=trim(OLD.id_student))>0
CREATE FUNCTION correct_mark () RETURNS trigger AS ' 
BEGIN 
if (select count(*) from Marks m where m.id_student=OLD.id_student)>0
then delete from Marks where Marks.id_student=OLD.id_student; 
end if;
return OLD;
END; 
' LANGUAGE  plpgsql;

-- Создание триггера
CREATE TRIGGER correct_mark_trigger
BEFORE DELETE ON Student FOR EACH ROW 
EXECUTE PROCEDURE correct_mark ();

--Проверка работы триггера 
DELETE FROM Student WHERE id_student=1;


drop trigger correct_mark_trigger on Student;

//todo on update trigger