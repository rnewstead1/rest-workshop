const express = require('express');
const bodyParser = require('body-parser');
const initStore = require('./store');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { jobsStore, employersStore } = initStore();
const { addJob, getAllJobs, getJobById, getJobsForEmployer, updateJob, deleteJob } = jobsStore;
const { addEmployer, getAllEmployers, getEmployerById } = employersStore;

/*
* Get all jobs
*/


/*
Add jobs to jobs store
*/

/*
Update the title of a job
*/

/*
Delete a job
*/

/*
Get a single job by id
*/

/*
Get the employer details for a job
*/

/*
Get all jobs for an employer
*/


app.get("/", async (req, res) => {
  return res.status(200).json({ greeting: 'hello world' });
});

const server = app.listen(5000, function () {
  console.log(`app running at http://localhost:${server.address().port}`);
});
