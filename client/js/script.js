axios.get('http://localhost:3000/products')
	.then( (res)=> {
		// handle success
		let products= res.data
		console.log(res);
	}).catch((err) => {
		console.log('err', err);
	})

window.onload = () =>{
	let sidebar= document.getElementById('sidebar')
	let ul= document.getElementsByTagName('ul')[0]
	let categories=['Accessories', 'Bags', 'Clothing', 'Shoes', 'Sale','Wallets']
	categories.forEach( (c) => {
		ul.insertAdjacentHTML('beforeEnd',`<li>
		<a href="#">${c}</a>
	</li>`)
	})
	let products = document.getElementById('products')
	console.log(products)
	let items = ['Item1','Item2','Item3','Item4']
	items.forEach((i) =>{
		products.insertAdjacentHTML('afterBegin',`
		<div class="product">
			<div class="product-image">
				<i class="far fa-star"></i>
			</div>
			<div class="product-extras">
				<div class="description">
					<h4>Nike!</h4>
					<small>Air Max 270</small>
				</div>
				<div class="price">
					<span>$189.99</span>
					<a href="#" class="button">shop now</a>
				</div>
			</div>
		</div>
		`
		)
	})
}
