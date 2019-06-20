// Config
const express = require('express')
const path = require('path')
const app = express()

//database

const db= require('./db.js')
// const provadb= require('./prova.js')

// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})

// API

app.get('/products', require('./controllers/products_get.js') )
app.get('/colors', require('./controllers/color_get.js') )

// Run Server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
