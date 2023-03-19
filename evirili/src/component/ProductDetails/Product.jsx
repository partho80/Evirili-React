import React from 'react'

function Product() {
  return (
      <div>
          <section class="product-section section-top-padding">
		<div class="container">
			{/* <!-- section header --> */}
			<div class="product-header">
				<h2>Related Products</h2>
				<p>Lorem Ipsum available, but the majority have.</p>
			</div>
			{/* <!-- section content --> */}
			<div class="ps-box-wrapper">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div class="product-box">
							<div class="pb-img">
								<img src="assets/img/Homepage/product-7.png" alt=""/>
							</div>
							<div class="product-box-hover text-center">
								<ul>
									<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i class="fa fa-eye"></i></a></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div class="product-label">
								<p>30% Off</p>
							</div>
							<div class="pb-text text-center">
								<h2>Beach Mini Dress</h2>
								<p>$100</p>
								<div class="pbt-ranking">
									<ul>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div class="product-box">
							<div class="pb-img">
								<img src="assets/img/Homepage/product-8.png" alt=""/>
							</div>
							<div class="product-box-hover text-center">
								<ul>
									<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i class="fa fa-eye"></i></a></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div class="pb-text text-center">
								<h2>Red High Heel</h2>
								<p>$130</p>
								<div class="pbt-ranking">
									<ul>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div class="product-box">
							<div class="pb-img">
								<img src="assets/img/Homepage/product-9.png" alt=""/>
							</div>
							<div class="product-box-hover text-center">
								<ul>
									<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i class="fa fa-eye"></i></a></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div class="product-label">
								<p>High Thick Heel</p>
							</div>
							<div class="pb-text text-center">
								<h2>Cocktail Dress</h2>
								<p>$100</p>
								<div class="pbt-ranking">
									<ul>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
										<li><i class="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="see-moreBrn-wrapper">
			<a href="#">
				<div class="see-more-btn text-center">
					<p>See More</p>
				</div>
			</a>
		</div>
	</section>
    </div>
  )
}

export default Product