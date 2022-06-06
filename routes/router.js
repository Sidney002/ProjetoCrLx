const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('main.html')
})
router.get('/ensaios',(req,res)=>{
    res.render('ensaios.html')
})

router.get('/pacotes',(req,res)=>{
    res.render('pacotes.html')
})

router.get('/contatos',(req,res)=>{
    res.render('contatos.html')
})

module.exports = router