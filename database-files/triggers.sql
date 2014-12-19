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


-- ON INSERT TRIGGER
Create Function ignore_dups() Returns Trigger
As $$
Begin
    If Exists (
        Select
            *
        From
            Student s
        Where
            s.name = NEW.name
            And s.surname = NEW.surname
    ) Then
        Return NULL;
    End If;
    Return NEW;
End;
$$ Language plpgsql;

Create Trigger ignore_dups
    Before Insert On Student
    For Each Row
    Execute Procedure ignore_dups();


--Проверка работы триггера 
INSERT INTO Student values(999, 'Dima', 'Petrov', 'M', 'dima1', 'dima1', 'Кленовая1', 'khjk', 'jkjk', 'student', TO_DATE('1994-05-03', 'yyyy-mm-dd'), 1, 5);

drop trigger ignore_dups on Student;