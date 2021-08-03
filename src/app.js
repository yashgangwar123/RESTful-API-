const express = require('express');
require("../src/db/conn");
const router = require('../src/routers/men');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to allow express to handle/use JSON data

// all get,post,patch calls are defined in routers nd called here
app.use(router)

app.get('/', async (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Server is live at port no. ${port}`);
})