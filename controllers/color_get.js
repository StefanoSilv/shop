const db = require('../db.js')

const newfunction = (req, res) => {
	db.query(`SELECT DISTINCT rating FROM products`, (err,result) => {
		if(err){
			console.log('err',err)
		}else{
			console.log(result);
			res.send(result.rows);
		}
	})
}

module.exports = newfunction
