const express = require('express')
const { engine } = require('express-handlebars')
const bodyPs = require('body-parser')

const app = express()
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))
app.use('/css', express.static('./css'))
app.use(express.static('public'));


app.use(bodyPs.urlencoded({ extended: false }))
app.use(bodyPs.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('form')
})

app.listen(3000, () => {
    console.log('Server is running...')
})  

