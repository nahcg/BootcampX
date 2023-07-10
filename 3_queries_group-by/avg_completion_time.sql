SELECT students.name, AVG(assignment_submissions.duration) AS avg_assignment_duration 
FROM students 
OIN assignment_submissions ON students.id = assignment_submissions.student_id WHERE end_date IS NULL 
GROUP BY name 
ORDER BY AVG(duration) DESC;