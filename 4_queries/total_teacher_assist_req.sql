SELECT name, count(assistance_requests.id) 
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id 
WHERE name = 'Waylon Boehm' 
GROUP BY name;