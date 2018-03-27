module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: {
      name: DataTypes.STRING,
      allowNull: false,
    },
   });
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
