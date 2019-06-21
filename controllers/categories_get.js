const db= require('../db.js')

const newfunction= (req, res) => {
	db.query(`SELECT * FROM categories`, (err,result)=>{
		if(err){
			console.log('err',err)
		}else{
			res.send(result.rows);
		}
	})
}

module.exports= newfunction
