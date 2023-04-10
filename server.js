const express = require('express');
const routerRecipe = require("./app/router/recipe");
const app = express();

app.use(express.static('./asset'));
app.use(express.json());

app.use(routerRecipe);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});