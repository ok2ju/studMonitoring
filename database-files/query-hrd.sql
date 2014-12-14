SELECT COUNT(mark) AS all_marks,
(SELECT COUNT(mark) FROM Marks, Student
	WHERE Marks.id_student = Student.id_student and
	      Marks.mark > 6 and Marks.mark < 9) +
(SELECT COUNT(mark) FROM Marks, Student
	WHERE Marks.id_student = Student.id_student and
	      Marks.mark > 8) AS "sum"
FROM Marks, Student
WHERE Marks.id_student = Student.id_student;


/* -------------- N= кол-во 7 и 8, M= кол-во 8 и 9, A= кол-во всех оценок
----------------- Качество знаний для ученика (в %) = (N + M)*100 / A --- */
SELECT ((
(SELECT COUNT(mark) FROM Student, Marks
	WHERE Student.id_student = Marks.id_student and
			Marks.mark > 8) +
(SELECT COUNT(mark) FROM Student, Marks
	WHERE Student.id_student = Marks.id_student and
			Marks.mark > 6 and Marks.mark < 9)
) * 100 /
(SELECT COUNT(mark) FROM Student, Marks
	WHERE Student.id_student = Marks.id_student))