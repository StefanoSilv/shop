// Config
const express = require('express')

const path = require('path')
const app = express()
const newfunction= require('./function.js')

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


app.get('/products', require('./function.js') )


// app.get('/prova', (req,res)=>{
// 	provadb.query('SELECT * FROM brands', (err,result)=>{
// 		if(err){
// 			console.log('err',err)
// 		}else{
// 			res.send(result.rows)
// 		}
// 	})
// })



// Run Server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
