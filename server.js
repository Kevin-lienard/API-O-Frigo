const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const { recipe } = require("./app/router");
const app = express();

app.use(express.static('./asset'));
app.use(express.json());

app.use(recipe);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});