const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./chef.json');


app.get('/', (req, res) =>{
    res.send("Server is running")
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
});

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})