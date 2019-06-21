window.onload = () =>{
	axios.get('http://localhost:3000/api/colors').then( (res) => {
		let categories=res.data
		let ul= document.getElementsByTagName('ul')[0]
		categories.forEach( (c) => {
			ul.insertAdjacentHTML('beforeEnd',`<li>
		<a href="#">${c.rating}</a>
	</li>`)
		})
	})
	axios.get('http://localhost:3000/api/products')
		.then( (res)=> {
			let items= res.data
			let products = document.getElementById('products')
			console.log(items, products)
			items.forEach((i) =>{
				products.insertAdjacentHTML('afterBegin',`
		<div class="product">
			<div class="product-image">
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
		}
		).catch((err) => {
			console.log('err', err);
		})}
