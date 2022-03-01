
const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/album', (req, res) => {
    res.render('album');
});

router.get('/pacotes', (req, res) => {
    res.render('pacotes');
})

router.get('/categoria', (req, res) => {
    res.render('categoria');
})


module.exports = router;