const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize-client");

class Quantity extends Model {}

Quantity.init({
  content: {
    type: DataTypes.STRING,
  }
}, 
{
  sequelize,
  tableName: "quantity"
});

module.exports = Quantity;