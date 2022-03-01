const express = require('express');
const port = 8080;
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const router = require('./src/routes/routes');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(router); //rotas

app.listen(
    port,
    () => console.log(`Server is runnig on url http://localhost:${port}`)
);