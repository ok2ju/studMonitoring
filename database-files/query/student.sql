create view studentList as
    select student.id, name, surname, middlename, gender, dob, phone, email,
    username, state, street, city, role,
    c.number as classNumber, c.letter as classLetter
    from Student, Class c
    where id_class = c.id;

