# REST Workshop

Accompanying [slides](https://docs.google.com/presentation/d/1LALehSdgBXwnTGavIPA_Fhwz7tdTWeIwbyPYGGdzdf4/edit?usp=sharing).

## Prerequisites
Download the [Postman app](https://www.postman.com/downloads/) - you will have to create a free account.
We will use this to test our API.

Clone this repo and run `npm i && npm run dev` and the app should start at http://localhost:5000

## Task

Build a REST API with the following endpoints:

- Return all the jobs
- Add a job
- Update the title of a job
- Delete a job
- Return a single job by id
- Return employer details for a job
- Return all jobs for an employer

## Data

Some initial data is found in [jobs.db](./store/data/jobs.db) and [employers.db](./store/data/employers.db).
This data will be loaded into an in-memory datastore when the application starts up.

You can add more following this data structure. Assume all fields are required.

Example job:

```js
{
  _id: '1', // unique
  title: 'English teacher',
  employerId: '1',
  candidates: [
    {
      name: 'Jon Snow',
      id: '10098'
    }
  ]
}
```

Example employer:

```js
{
  _id: '1', // unique
  name: 'Beyond The Wall School', // unique
  type: 'Secondary',
  numberOfPupils: 100
}
```

## Next steps
Use [supertest](https://www.npmjs.com/package/supertest) to write some automated tests for your api using [mocha](https://www.npmjs.com/package/mocha) (or a test framework of your choice).
