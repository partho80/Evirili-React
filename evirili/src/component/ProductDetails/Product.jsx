import React from 'react'

function Product() {
  return (
      <div>
          <section className="product-section section-top-padding">
		<div className="container">
			{/* <!-- section header --> */}
			<div className="product-header">
				<h2>Related Products</h2>
				<p>Lorem Ipsum available, but the majority have.</p>
			</div>
			{/* <!-- section content --> */}
			<div className="ps-box-wrapper">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="product-box">
							<div className="pb-img">
								<img src="assets/img/Homepage/product-7.png" alt=""/>
							</div>
							<div className="product-box-hover text-center">
								<ul>
									<li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i className="fa fa-eye"></i></a></li>
									<li><a href="#"><i className="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div className="product-label">
								<p>30% Off</p>
							</div>
							<div className="pb-text text-center">
								<h2>Beach Mini Dress</h2>
								<p>$100</p>
								<div className="pbt-ranking">
									<ul>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="product-box">
							<div className="pb-img">
								<img src="assets/img/Homepage/product-8.png" alt=""/>
							</div>
							<div className="product-box-hover text-center">
								<ul>
									<li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i className="fa fa-eye"></i></a></li>
									<li><a href="#"><i className="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div className="pb-text text-center">
								<h2>Red High Heel</h2>
								<p>$130</p>
								<div className="pbt-ranking">
									<ul>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-12 mb-2">
						<div className="product-box">
							<div className="pb-img">
								<img src="assets/img/Homepage/product-9.png" alt=""/>
							</div>
							<div className="product-box-hover text-center">
								<ul>
									<li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
									<li><a href="#"><i className="fa fa-eye"></i></a></li>
									<li><a href="#"><i className="fa fa-heart-o"></i></a></li>
								</ul>
							</div>
							<div className="product-label">
								<p>High Thick Heel</p>
							</div>
							<div className="pb-text text-center">
								<h2>Cocktail Dress</h2>
								<p>$100</p>
								<div className="pbt-ranking">
									<ul>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="see-moreBrn-wrapper">
			<a href="#">
				<div className="see-more-btn text-center">
					<p>See More</p>
				</div>
			</a>
		</div>
	</section>
    </div>
  )
}

export default Product