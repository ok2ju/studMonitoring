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
DELETE FROM Student WHERE id=1;


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


-- ON UPDATE TRIGGER
CREATE FUNCTION log_update()
  RETURNS trigger AS
$$
BEGIN
    IF NEW.mark <> OLD.mark THEN
         INSERT INTO Marks_log(marks_id, mark, study_year, semester, id_subject, id_student, changed_on)
         VALUES(OLD.id,OLD.mark, OLD.study_year, OLD.semester, OLD.id_subject, OLD.id_student, now());
    END IF;
 
    RETURN NEW;
END;
$$ Language plpgsql;

CREATE TRIGGER log_update
    BEFORE UPDATE ON Marks
    FOR EACH ROW
    EXECUTE PROCEDURE log_update();

CREATE SEQUENCE marks_log_seq START 1;

CREATE TABLE Marks_log
(
    id SERIAL DEFAULT nextval('marks_log_seq'::regclass) PRIMARY KEY,
    marks_id integer not null,
    mark integer,
    study_year integer,
    semester integer,
    id_subject integer,
    id_student integer,
    changed_on timestamp(6) not null
);