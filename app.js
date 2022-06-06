const express = require('express');
const app = express();
const port = 8001 



//sessão
const session = require('express-session');
app.use(session({
    secret: "456123843",
    resave: true,
    saveUninitialized: true
}));
//configurações do app
const path = require('path');
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
//rotas
const router = require('./routes/router');
app.use(router)

app.listen(
    port,
    ()=>console.log(`Server is runnig on url http://localhost:${port}`)
);