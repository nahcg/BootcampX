const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`];

const queryString = `
SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort 
FROM teachers 
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id 
JOIN students ON students.id = assistance_requests.student_id 
JOIN cohorts ON students.cohort_id = cohorts.id 
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}:  ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));


