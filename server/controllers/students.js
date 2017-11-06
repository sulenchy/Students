const students = require('../models').students;

module.exports = {
  create(req, res) {
    return students
      .create({
        matric_no: req.body.matric_no,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        othername: req.body.othername,
      })
      .then(std => res.status(200).send(std))
      .catch(error => res.status(400).send(error.message));
  },
  list(req, res) {
    return students
      .all()
      .then(std => res.status(200).send(std))
      .catch(error => res.status(400).send(error.message));
  },

  retrieve(req, res) {
    return students
      .findById(req.params.Id)
      .then(std => {
        if (!std) {
          return res.status(400).send({
            message: 'student Not Found',
          });
        }
        return res.status(200).send(std);
      })
      .catch(error => res.status(400).send(error.message));
  },

  update(req, res) {
    return students
      .findById(req.params.Id, {
        include: [{
          model: req.body.matric_no,
          as: 'matric',
        }],
      })
      .then(std => {
        if (!std) {
          return res.status(400).send({
            message: 'student Not Found',
          });
        }
        return students
          .update({
            title: req.body.surname || students.surname,
          })
          .then(() => res.status(200).send(todo))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error.message));
      })
      .catch((error) => res.status(400).send(error.message));
  },
};