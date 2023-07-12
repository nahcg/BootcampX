SELECT AVG(total_duration) AS avg_total_duration 
FROM (
  SELECT cohorts.name AS name, SUM(completed_at - started_at) AS total_duration FROM cohorts 
  JOIN students ON cohorts.id = students.cohort_id 
  JOIN assistance_requests ON students.id = assistance_requests.student_id GROUP BY cohorts.name 
  ORDER BY total_duration
) AS avg_total_duration;