const db= require('../db.js')

const newfunction= (req, res) => {
 return New Promise((resolve, reject) => {
 		resolve db.query(`SELECT * FROM products WHERE category=${req.params.id}`, (err,result)=>{
		if(err){
			console.log('err',err)
		}else{
			res.send(result.rows);
		}
	})
}).then(resolve res.send(result.rows)).catch(console.log('The column does not exist'))
}


module.exports= newfunction
