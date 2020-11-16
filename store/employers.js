const Datastore = require('nedb');

const employersStore = () => {
  const employersStore = new Datastore({ filename: `${__dirname}/data/employers.db` });
  employersStore.loadDatabase((err) => { if (err) throw err; });
  employersStore.ensureIndex({ fieldName: 'name', unique: true }, (err) => { if (err) throw err; });

  const addEmployer = (employer) => {
    return new Promise((resolve, reject) => {
      employersStore.insert(employer, (err, newDoc) => {
        if (err) {
          reject(err);
        } else {
          resolve(newDoc)
        }
      })
    })
  };

  const getAllEmployers = () => {
    return new Promise((resolve, reject) => {
      employersStore.find({ }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    });
  };

  const getEmployerById = (id) => {
    return new Promise((resolve, reject) => {
      employersStore.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    })
  };

  return {
    addEmployer,
    getAllEmployers,
    getEmployerById,
  };
}

module.exports = employersStore;
