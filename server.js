const express = require('express');
const { recipe } = require("./app/router");
const app = express();

app.use(express.json());

app.use(recipe);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});