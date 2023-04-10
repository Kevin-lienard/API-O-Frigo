const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize-client");

class Step extends Model {}

Step.init({
  content: {
    type: DataTypes.STRING,
  }
}, 
{
  sequelize,
  tableName: "step"
});

module.exports = Step;