// Config
const express = require('express')

const path = require('path')
const app = express()

//database

const db= require('./db.js')

// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})


app.get('/products', (req, res) => {
	db.query(`SELECT * FROM products`, (err,result)=>{
		if(err){
			console.log('err',err)
		}else{
			console.log('result',result.rows);
		}
	})
})

app.get('/categories', (req,res)=>{
	db.query('SELECT * FROM categories', (err,result)=>{
		if(err){
			console.log('err',err)
		}else{
			console.log('categories', result.rows);
		}
	})
})


// Run Server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
