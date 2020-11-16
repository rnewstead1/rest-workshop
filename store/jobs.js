const Datastore = require('nedb');

const jobsStore = () => {
  const jobsStore = new Datastore({ filename: `${__dirname}/data/jobs.db` });
  jobsStore.loadDatabase((err) => { if (err) throw err; });

  const addJob = (job) => {
    return new Promise((resolve, reject) => {
      jobsStore.insert(job, (err, newDoc) => {
        if (err) {
          reject(err);
        } else {
          resolve(newDoc)
        }
      })
    })
  };

  const getAllJobs = () => {
    return new Promise((resolve, reject) => {
      jobsStore.find({ }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    });
  };

  const getJobById = (id) => {
    return new Promise((resolve, reject) => {
      jobsStore.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    })
  };

  const getJobsForEmployer = (employerId) => {
    return new Promise((resolve, reject) => {
      jobsStore.findOne({ employerId }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    })
  };

  const updateJob = (id, updatedJob) => {
    return new Promise((resolve, reject) => {
      jobsStore.update({ _id: id }, updatedJob, {}, (err, numAffected, updatedDocs) => {
        if (err) {
          reject(err);
        } else if (numAffected !== 1) {
          reject(new Error('Wrong number of docs updated'));
        } else {
          resolve(updatedDocs);
        }
      })
    })
  };

  const deleteJob = (id) => {
    return new Promise((resolve, reject) => {
      jobsStore.remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else if (numRemoved !== 1) {
          reject(new Error('Wrong number of docs updated'));
        } else {
          resolve(numRemoved);
        }
      })
    })
  };

  return {
    addJob,
    getAllJobs,
    getJobById,
    getJobsForEmployer,
    updateJob,
    deleteJob
  };
}

module.exports = jobsStore;
