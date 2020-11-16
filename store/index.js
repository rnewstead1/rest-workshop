const initJobsStore = require('./jobs');
const initEmployersStore = require('./employers');

const initDatastore = () => ({
  jobsStore: initJobsStore(),
  employersStore: initEmployersStore(),
});

module.exports = initDatastore;
