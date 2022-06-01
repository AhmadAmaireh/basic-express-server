const express = require('express');
const notFoundHandler = require('../src/handlers/404');
const errorHandler = require('../src/handlers/500');
const logger = require('../src/middleware/logger');
const validator=require ('../src/middleware/validator')
const app=express();

app.use(logger);

app.get("/person",validator, (req,res)=>{
    res.send({ name: req.query.name})
        
})

app.get("/" , (req,res)=>{
  res.send("Hello I'm Ahmad")
})
app.use('*', notFoundHandler);
app.use(errorHandler);
function start(port)
{
  app.listen(port,() => {

    console.log(`i'm listening on port${port}`);
  })
}

module.exports = {
    app: app,
    start: start,
} 