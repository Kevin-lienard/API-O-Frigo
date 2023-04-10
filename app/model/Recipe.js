const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize-client");

class Recipe extends Model {}

Recipe.init({
  name: {
    type: DataTypes.STRING,
  },
  difficulty: {
    type: DataTypes.STRING
  },
  picture: {
    type: DataTypes.STRING
  },
  rate: {
    type: DataTypes.NUMBER
  },
  time: {
    type: DataTypes.INTEGER
  }
}, 
{
  sequelize,
  tableName: "recipe"
});

module.exports = Recipe;