const express = require ('express');
const app = express();
const router = require ('./router')
const port = 3001;
const db = require ('./models/index')


app.use(express.json()); //bodyparser fuer json
app.use(router);






app.listen(port, ()=> console.log(`This server is running on http://localhost:${port}`)) 