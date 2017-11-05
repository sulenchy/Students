'use strict';
module.exports = (sequelize, DataTypes) => {
  var students = sequelize.define('students', {
    matric_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    othername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return students;
};