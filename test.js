const { Recipe } = require("./model");

async function getRecipeWithTags(id){
    const recipeTag = await Recipe.findByPk(id, { include: { association: 'tagRecipe' }, order: [['tagRecipe', 'label', 'ASC']] });
    const recipe = await Recipe.findByPk(id);

    const recipeWithTags = recipe.dataValues;
    recipeWithTags.tags = [];

    for(const tag of recipeTag.dataValues.tagRecipe){
        recipeWithTags.tags.push(tag.label);
    }

    return recipeWithTags;
};

(async function(){
    console.log(await getRecipeWithTags(1));
})();