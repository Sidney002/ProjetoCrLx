const express = require('express')
const port = 8080
const path = require('path')
const bodyparser = require('body-parser')
const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/album',(req,res)=>{
    res.render('album.html')
})
app.get('/pacotes',(req,res)=>{
    res.render('pacotes.html')
})




app.listen(port,()=>{
    console.log(`API  IS RUNING IN PORT ${port}`)
})