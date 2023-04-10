const { Recipe } = require("./model");

async function getAllRecipe() {
    const recipe = await Recipe.findAll();

    console.log(recipe);
};

async function getRecipeById(id) {
    const recipe = await Recipe.findByPk(id, { include: { association: 'tagRecipe' }});

    //console.log(recipe.dataValues);

    for(const tag of recipe.dataValues.tagRecipe){
        console.log(tag.label);
    }
};

//getAllRecipe();
getRecipeById(1);