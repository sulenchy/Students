const studentsController = require('../controllers').students;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // adding new students
  app.post('/api/students', studentsController.create);

  // get list of all students added
  app.get('/api/students', studentsController.list);

  // get students by id
  app.get('/api/students/:Id', studentsController.retrieve);

  // update the student record
  app.put('/api/students/:Id', studentsController.update);

};