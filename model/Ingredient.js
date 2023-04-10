const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize-client");

class Ingredient extends Model {}

Ingredient.init({
  label: {
    type: DataTypes.STRING,
  }
}, 
{
  sequelize,
  tableName: "ingredient"
});

module.exports = Ingredient;