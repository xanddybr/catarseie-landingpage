const express = require('express')
const { engine } = require('express-handlebars')
const app = express()

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))
app.use('/css', express.static('./css'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('form')
})

app.listen(3000, () => {
    console.log('Server is running...')
})  



