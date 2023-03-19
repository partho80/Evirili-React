import React from 'react'

function BlogDetailsBody() {
  return (
      <div>
          <section className="single-blog-details section-top-padding">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					{/* <!-- left- single blog content --> */}
					<div className="sbd-wrapper">
						{/* <!-- blog details --> */}
						<div className="sbd-item">
							<div className="bb-img">
								<img src="assets/img/blog-single/blog-single.png" alt="" />
								<div className="bb-item-hover">
									<a className="image-link" href="assets/img/blog-single/single-blog=img-1.jpg">
										<i className="fa fa-arrows-alt"></i>
									</a>
								</div>
							</div>
							<div className="bb-img-rapper-info">
								<div className="bb date">
									<p>24 August 2019</p>
								</div>
								<div className="bb-list">
									<ul>
										<li><i className="fa fa-commenting" aria-hidden="true"></i> 1.5k</li>
										<li><i className="fa fa-heart" aria-hidden="true"></i> 1.5k</li>
									</ul>
								</div>
							</div>
							<div className="sbd-text">
								<h2>Shopping is a bit of a relaxing hobby for me, which sometimes
									troubling for the bank balance
								</h2>
								<p>Lorem Ipsum available the majority have suffered alteration form injected humour
									randomised words which don't look even slightly believable. If you are going to use
									passage of Lorem Ipsum, you need to be sure there
								</p>
								<p>
									Isn't anything embarrassing hidden in middle of text the lorem Ipsum generators
									on the Internet tend to repeat predefined chunks as necessary, making this the first
									true generator on the Internet. It uses a dictionary of over 200 Latin words
									combined with a handful of model sentence structures, to generate lorem Ipsum
									which looks reasonable. The generated Lorem Ipsum is therefore always free from
									repetition, injected humour, or non-characteristic words etc
								</p>
								{/* <!-- quote --> */}
								<div className="quote">
									<h3>The best way to find out what we really need is to get
										rid of what we don't. Quests to faraway places or
										shopping sprees are no longer necessary.
									</h3>
									<span>_Jony Bristo <img src="assets/img/icon/queat.png" alt=""/></span>
								</div>
								<p>
									Lorem Ipsum available, but the majority have suffered alteration some form injected
									humour, or randomised words which don't look even slightly believable.if you are
									going to use a passage of iorem Ipsum, you need.
								</p>
							</div>
						</div>
						{/* <!-- comment section --> */}
						<div className="sbd-command">
							<h2 className="sbd-title">COMMENTS</h2>
							<div className="command-box">
								<div className="row">
									<div className="col-md-2 col-sm-3 col-3">
										<div className="cb-img">
											<img src="assets/img/blog-single/command-img.png" alt=""/>
										</div>
									</div>
									<div className="col-md-10 col-sm-9 col-9 row-pl">
										<div className="cb-text">
											<h2>Jonny Taylor</h2>
											<h3>Comment 1 Hours Ago <span className="pull-right">08 October 2019</span></h3>
											<p>Your work is going to fill a large part of your life, and the only
												waytruly
												satisfied
												is to do what you believe is great work. And the only way to do great
												work
												love
												what you do. If you haven't found it yet, keep looking.
											</p>
											<a href="#">Reply</a>
										</div>
										{/* <!-- reply command box --> */}
										<div className="reply-command-box">
											{/* <!-- new row --> */}
											<div className="row">
												<div className="col-md-2 col-sm-3 col-3">
													<div className="rcb-img">
														<img src="assets/img/blog-single/reply-command-img.png" alt=""/>
													</div>
												</div>
												<div className="col-md-10 col-sm-9 col-9 row-pl">
													<div className="rcb-text ml-10">
														<h2>Jonny Taylor</h2>
														<h3>Comment 1 Hours Ago <span className="pull-right">08 October
																2019</span></h3>
														<p>Your work is going to fill a large part of your life, and the
															only waytruly satisfied
															is to do what you believe is great work. And the only way to
															do
															great work love
															what you do. If you haven't found it yet, keep looking.
														</p>
														<a href="#">Reply</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- input form --> */}
						<div className="contact-form">
							<h2 className="sbd-title">LEAVE A COMMENT</h2>
							<p>Lorem Ipsum available, but the majority have suffered alteration in some.</p>
							{/* <!-- new row --> */}
							<form className="cf-form">
								<div className="row">
									<div className="col-md-6 col-sm-6">
										<div className="cf-group">
											<input type="text" placeholder="Fast Name"/>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="cf-group">
											<input type="text" placeholder="Last Name"/>
										</div>
									</div>
									<div className="col-md-6 col-sm-12">
										<div className="cf-group">
											<input type="text" placeholder="Your Email"/>
										</div>
									</div>
									<div className="col-md-6 col-sm-12">
										<div className="cf-group">
											<input type="text" placeholder="Your Country"/>
										</div>
									</div>
									<div className="col-md-12 col-sm-12">
										<div className="cf-group">
											<textarea name="massage" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="cf-group">
											<button type="submit" className="btn3"><i
													className="fa fa-arrow-right"></i></button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/* <!-- right - said bar content --> */}
				<div className="col-lg-4 col-md-122">
					<div className="said-Bar-section">
						<div className="sb-wrapper">
							{/* <!-- search box --> */}
							<form className="sb-form">
								<div className="sb-group">
									<input type="text" placeholder="Search"/>
									<button type="submit"><i className="fa fa-long-arrow-right"
											aria-hidden="true"></i></button>

								</div>
							</form>
							{/* <!-- recent post box --> */}
							<div className="sb-recent-post">
								<h2 className="sb-title">Recent Post</h2>
								<div className="sb-rp-box">
									{/* <!-- new row --> */}
									<div className="single-rp">
										<div className="srp-left">
											<div className="srb-left-img mr-4">
												<img src="assets/img/Blog/rp-1.png" alt=""/>
											</div>
										</div>
										<div className="srp-right">
											<div className="srb-right-text">
												<a href="blog-details.html">
													<h2>Shopping is a bit of a relaxing.</h2>
												</a>
												<p>24 August 2019</p>
											</div>
										</div>
									</div>
								</div>

								<div className="sb-rp-box">
									{/* <!-- new row --> */}
									<div className="single-rp">
										<div className="srp-left">
											<div className="srb-left-img mr-4">
												<img src="assets/img/Blog/rp-2.png" alt=""/>
											</div>
										</div>
										<div className="srp-right">
											<div className="srb-right-text">
												<a href="blog-details.html">
													<h2>Shopping is a bit of a relaxing.</h2>
												</a>
												<p>24 August 2019</p>
											</div>
										</div>
									</div>
								</div>

								<div className="sb-rp-box">
									{/* <!-- new row --> */}
									<div className="single-rp">
										<div className="srp-left">
											<div className="srb-left-img mr-4">
												<img src="assets/img/Blog/rp-3.png" alt=""/>
											</div>
										</div>
										<div className="srp-right">
											<div className="srb-right-text">
												<a href="blog-details.html">
													<h2>Shopping is a bit of a relaxing.</h2>
												</a>
												<p>24 August 2019</p>
											</div>
										</div>
									</div>
								</div>

								{/* <!-- list item name --> */}
								<div className="sb-list">
									<h2 className="sb-title">Categories</h2>
									<ul>
										<li><a href="product-page.html">Baby’s Cloths (55)</a></li>
										<li><a href="product-page.html">Boys (15)</a></li>
										<li><a href="product-page.html">Girls (16)</a></li>
										<li><a href="product-page.html">Men (44)</a></li>
										<li><a href="product-page.html">Women (50)</a></li>
										<li><a href="product-page.html">Accessories (72)</a></li>
										<li><a href="product-page.html">Shoes (10)</a></li>
									</ul>
								</div>

								{/* <!-- list item name --> */}
								<div className="sb-list">
									<h2 className="sb-title">Archives</h2>
									<ul>
										<li><a href="product-page.html">January (2019)</a></li>
										<li><a href="product-page.html">December (2019)</a></li>
										<li><a href="product-page.html">November (2019)</a></li>
										<li><a href="product-page.html">March (2019)</a></li>
										<li><a href="product-page.html">April (2019)</a></li>
									</ul>
								</div>

								{/* <!-- list item name --> */}
								<div className="sb-list">
									<h2 className="sb-title">Product Tags</h2>
									<ul>
										<li><a href="product-page.html">Fashion</a></li>
										<li><a href="product-page.html">Dress</a></li>
										<li><a href="product-page.html">Kid’s</a></li>
										<li><a href="product-page.html">Shoes</a></li>
										<li><a href="product-page.html">Accessries</a></li>
										<li><a href="product-page.html">Glamour</a></li>
									</ul>
								</div>

								{/* <!-- social media icon --> */}
								<div className="sb-social-media text-center">
									<div className="sb-sm-header">
										<h2 className="box-header">Social Media</h2>
									</div>
									<div className="sb-sm-link">
										<ul>
											<li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"
														aria-hidden="true"></i></a>
											</li>
											<li><a href="https://twitter.com/"><i className="fa fa-twitter"
														aria-hidden="true"></i></a></li>
											<li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"
														aria-hidden="true"></i></a></li>
											<li><a href="https://www.facebook.com/"><i className="fa fa-facebook"
														aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
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

export default BlogDetailsBody