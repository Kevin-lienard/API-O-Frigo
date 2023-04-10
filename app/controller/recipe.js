const { Recipe } = require("../model");

const recipeController = {

    getAllRecipe: async (_, res) =>{
        const recipe = await Recipe.findAll({ include: [ 'tagRecipe', 'ingredientRecipe', 'stepRecipe', 'quantityRecipe' ], order: [ ['id', 'ASC'], ['tagRecipe', 'label', 'ASC']] });
    
        res.status(200).json(recipe);
    },

    getRecipeWithTags: async (req, res) =>{
        const recipeId = req.params.id;
        const recipe = await Recipe.findByPk(recipeId, { include: [ 'tagRecipe', 'ingredientRecipe', 'stepRecipe', 'quantityRecipe' ], order: [ ['tagRecipe', 'label', 'ASC'], ['ingredientRecipe', 'label', 'ASC'] ] });

        res.status(200).json(recipe);
    },

};

module.exports = recipeController;
