const express = require('express')
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/login', (req, res) => {
    res.render('login');
})


app.listen(3000, () => {
    console.log('listen at port 3000')
})