import React from 'react'

function CartBody() {
  return (
      <div>
          <section className="shopping-cart-section section-top-padding">
		<div className="container">
			{/* <!-- table --> */}
			<div className="row">
				<div className="col-md-12 col-12">
					<div className="table-responsive">
						<table className="table cart-table">
							<thead>
								<tr>
									<th className="ct-first">Product</th>
									<th className="ct-second">Description</th>
									<th className="ct-third">Quantity</th>
									<th className="ct-fourth">Unit Price</th>
									<th className="ct-fifth">Total</th>
									<th className="ct-sixth">Edit</th>
								</tr>
							</thead>
							<tbody>
								{/* <!-- 1 --> */}
								<tr>
									<td data-label="Product">
										<img src="assets/img/cart/img-1.png" alt=""/>
									</td>
									<td data-label="Description" className="cart-desc-td">
										<div className="product-info">
											<h2>Rainbow Shoes</h2>
											<p>Lorem Ipsum availablethe majority
												have suffered alteration in some
												form, by injected humour.
											</p>
										</div>
									</td>
									<td data-label="Quantity">
										<div className="prp-qtn-cart">
											<button type="button" id="sub-1" className="sub prp-qtn-btn"><i
													className="fa fa-minus"></i></button>
											<input type="text" id="in-1" className="prp-qtn-input" value="1" />
											<button type="button" id="add-1" className="add prp-qtn-btn"><i
													className="fa fa-plus"></i></button>
										</div>
									</td>
									<td data-label="Unit Price">$100</td>
									<td data-label="Total">$100</td>
									<td className="cart-action" data-label="Edit">
										<a href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a>
									</td>
								</tr>
								{/* <!-- 2 --> */}
								<tr>
									<td data-label="Product">
										<img src="assets/img/cart/img-2.png" alt=""/>
									</td>
									<td data-label="Description">
										<div className="product-info">
											<h2>Rainbow Shoes</h2>
											<p>Lorem Ipsum availablethe majority
												have suffered alteration in some
												form, by injected humour.
											</p>
										</div>
									</td>
									<td data-label="Quantity">
										<div className="prp-qtn-cart">
											<button type="button" id="sub-2" className="sub prp-qtn-btn"><i
													className="fa fa-minus"></i></button>
											<input type="text" id="in-2" className="prp-qtn-input" value="1" />
											<button type="button" id="add-2" className="add prp-qtn-btn"><i
													className="fa fa-plus"></i></button>
										</div>
									</td>
									<td data-label="Unit Price">$100</td>
									<td data-label="Total">$100</td>
									<td className="cart-action" data-label="Edit">
										<a href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a>
									</td>
								</tr>
								{/* <!-- 3 --> */}
								<tr>
									<td data-label="Product">
										<img src="assets/img/cart/img-3.png" alt=""/>
									</td>
									<td data-label="Description">
										<div className="product-info">
											<h2>Red High Wedage</h2>
											<p>Lorem Ipsum availablethe majority
												have suffered alteration in some
												form, by injected humour.
											</p>
										</div>
									</td>
									<td data-label="Quantity">
										<div className="prp-qtn-cart">
											<button type="button" id="sub-3" className="sub prp-qtn-btn"><i
													className="fa fa-minus"></i></button>
											<input type="text" id="1" className="prp-qtn-input" value="1" />
											<button type="button" id="add-3" className="add prp-qtn-btn"><i
													className="fa fa-plus"></i></button>
										</div>
									</td>
									<td data-label="Unit Price">$100</td>
									<td data-label="Total">$100</td>
									<td className="cart-action" data-label="Edit">
										<a href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td className="ct-btn-wrapper" colspan="6">
										<a href="#" className="btn4 pull-left">Continue Shopping</a>
										<a href="#" className="btn4 pull-right">Update Shopping Cart</a>
									</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* <!-- total amount & coupon --> */}
			<div className="row">
				<div className="col-md-6 col-sm-10 col-12">
					<div className="scs-left-text section-top-margin">
						<h2>Coupon</h2>
						<form className="scs-l-group">
							<input type="text" placeholder="Your Coupon Code"/>
							<button type="submit">Apply Coupon</button>
						</form>
					</div>
				</div>
				<div className="col-md-6 col-sm-10 col-12">
					<div className="scs-right-wrapper section-top-margin">
						<div className="scs-r-text">
							<h2>Cart Totals</h2>
							<ul>
								<li>Subtotal <span className="pull-right">$100.00</span></li>
								<li>Total <span className="pull-right">$150.00</span></li>
							</ul>
							<div className="process-btn text-center">
								<a href="checkout.html" className="btn5">Proceed To Checkout</a>
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

export default CartBody