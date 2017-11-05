const studentsController = require('../controllers').students;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // adding new students
  app.post('/api/students', studentsController.create);
  app.get('/api/students', studentsController.list);

};