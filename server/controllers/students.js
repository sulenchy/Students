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
      .findById(req.params.id)
      .then(std => {
        if (!std) {
          return res.status(400).send({
            message: 'student Not Found',
          });
        }
        return res.status(200).send(std);
      })
      .catch(error => res.status(400).send(error));
  },
};