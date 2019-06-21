let array=['item1', 'item2', 'item3', 'item4']
console.log(array)

setTimeout(() => {
	array.forEach((i) =>{
		console.log(i)
	}
	)
}, 5000)
