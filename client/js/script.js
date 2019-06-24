window.onload = () =>{
	axios.get('/api/categories').then( (res) => {
		let categories=res.data
		let ul= document.getElementsByTagName('ul')[0]
		categories.forEach( (c) => {
			ul.insertAdjacentHTML('beforeEnd',`<li>
		<a href="#" class="category" id=${c.id}>${c.name}</a>
	</li>`)
		})
	})}
	// axios.get('/api/products')
	// 	.then( (res)=> {
	// 		let items= res.data
	// 		let products = document.getElementById('products')
	// 		console.log(items, products)
	// 		items.forEach((i) =>{
	// 			console.log(i.image)
	// 			products.insertAdjacentHTML('afterBegin',`
	// 	<div class="product">
	// 	<div class="product-image" style="background-image: url('../img${i.image}')">
	// 			<i class="far fa-star"></i>
	// 		</div>
	// 		<div class="product-extras">
	// 			<div class="description">
	// 				<h4>${i.name}</h4>
	// 				<small>${i.author}</small>
	// 			</div>
	// 			<div class="price">
	// 				<span>${i.price}</span>
	// 				<a href="#" class="button">shop now</a>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	`
	// 			)
	// 		})
	// 	}
	// 	).catch((err) => {
	// 		console.log('err', err);
	// 	})}

axios.get('/api/productsx')
	.then( (res)=> {
		let items= res.data
		let products = document.getElementById('products')
		console.log(items, products)
	}
	).catch((err) => {
		console.log('err', err);
	})

document.addEventListener('click', (e) =>{
	if  (e.target.classList.contains('category')) {
		axios.get(`/api/products/${e.target.id}`).then( (res) => {
			let items= res.data
			let products = document.getElementById('products')
			products.innerHTML = ''

			items.forEach((i) =>{
				products.insertAdjacentHTML('afterBegin',`
		<div class="product">
		<div class="product-image" style="background-image: url('../img${i.image}')">
				<i class="far fa-star"></i>
			</div>
			<div class="product-extras">
				<div class="description">
					<h4>${i.name}</h4>
					<small>${i.author}</small>
				</div>
				<div class="price">
					<span>${i.price}</span>
					<a href="#" class="button">shop now</a>
				</div>
			</div>
		</div>
		`
				)
			})
		})
	}
})
