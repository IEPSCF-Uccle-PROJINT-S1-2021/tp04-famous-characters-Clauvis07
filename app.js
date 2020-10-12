const express = require('express');
//const path = require('path'); //charger le module path
const bodyparser = require('body-parser');
const app     = express(); //cree le module
//app.set("view engine", "pug"); //on specifie au routeur quelle view use
//app.set("views", path.join(__dirname,"views")); //on precise le chamin complet de la vue
app.use(bodyparser.urlencoded({extended:false}));

const logger  = require('morgan');

app.use(logger('dev'));

app.use('/static',express.static('public'));

app.get('/',(req,res)=>{
      res.redirect("/static/accueil.html");
  });

  app.listen(3232,()=>{
    console.log(`Express js server listing on http://127.0.0.1:3232/`);
    });
