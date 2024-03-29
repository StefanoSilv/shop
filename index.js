// Config
const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()
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

app.get('/api/products', require('./controllers/products_get.js') )
app.get('/api/products/:id', require('./controllers/productsx_get.js') )
app.get('/api/colors', require('./controllers/color_get.js') )
app.get('/api/categories', require('./controllers/categories_get.js') )

// Run Server
app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
