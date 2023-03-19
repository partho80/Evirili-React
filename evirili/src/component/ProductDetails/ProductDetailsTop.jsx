import React from 'react'

function ProductDetailsTop() {
  return (
      <div>
          <section className="product-details-section section-top-padding">
		<div className="container">
			<div className="row">
				{/* <!-- product gellary --> */}
				<div className="col-md-7 col-12">
					<div className="xzoom-container">
						<img className="xzoom" id="xzoom-default" src="assets/img/product/preview-1.png" alt="" />
					</div>
					<div className="xzoom-thumbs">
						<a href="assets/img/product/orginal-1.png">
							<img className="xzoom-gallery" width="80" src="assets/img/product/thums-1.png" alt=""/>
						</a>

						<a href="assets/img/product/orginal-2.png">
							<img className="xzoom-gallery" width="80" src="assets/img/product/thums-2.png" alt=""/>
						</a>

						<a href="assets/img/product/orginal-1.png">
							<img className="xzoom-gallery" width="80" src="assets/img/product/thums-1.png" alt=""/>
						</a>

					</div>
				</div>
				{/* <!-- main right -->/ */}
				<div className="col-md-5 col-12">
					<div className="product-right">
						<div className="pr-header-width">
							<div className="pr-header">
								<h2 className="pr-title">Womens Wedge High Red Shoes</h2>
								<p><b>Promotion: </b>you can buy up to 20 pieces with flash sale prices
									the items over 20 will be charge at original price.</p>
							</div>
							<div className="pr-price">
								<p><b className="text-red">$150</b> <del>$170</del> (Save $20) <span
										className="pull-right text-red">(1k
										Review)</span></p>
							</div>
						</div>
						<div className="pr-content-width">
							<div className="pr-color">
								<h2 className="pr-title2">Shoes Color: Red</h2>
								<ul className="choese-color">
									<li className="color-mexican-red"></li>
									<li className="color-governor-bay"></li>
									<li className="color-jelly-bean"></li>
									<li className="color-seance"></li>
									<li className="color-athens-gray"></li>
								</ul>
							</div>
							<div className="pr-size">
								<h2 className="pr-title2">Shoes Size: L</h2>
								<ul className="pr-size-category">
									<li>S</li>
									<li>M</li>
									<li>L</li>
									<li>XL</li>
								</ul>
								<p><b>Availability :</b> Select Color and Size for Availability
									Processing time 2 - 4 business days.</p>
							</div>
							<div className="pr-quantity">
								<div className="prq-right">
									<p>Quantity: </p>
								</div>
								<div className="prp-qtn pull-right">
									<button type="button" id="sub" className="sub prp-qtn-btn"><i
											className="fa fa-minus"></i></button>
									<input type="text" id="1" className="prp-qtn-input" value="1" />
									<button type="button" id="add" className="add prp-qtn-btn"><i
											className="fa fa-plus"></i></button>
								</div>
							</div>
							<div className="pr-order-btn text-center mar-top-20">
								<button type="submit">ADD TO BAG</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default ProductDetailsTop