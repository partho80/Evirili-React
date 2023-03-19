import React from 'react'

function TopCategory() {
  return (
      <div>
              <section className="top-category-section section-top-padding">
        <div className="container">
            {/* <!-- section header --> */}
            <div className="row">
                <div className="col-md-12 col-12-col-sm-12">
                    <div className="section-header text-center">
                        <h2>TOP PRODUCTS</h2>
                    </div>
                </div>
            </div>

            {/* <!-- section content --> */}
            <div className="row">
                {/* <!-- top category box - 1 --> */}
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="top-category-box section-top-margin">
                        <div className="tcb-img">
                            <img src="assets/img/Homepage/top-category-img-1.png" alt=""/>
                        </div>
                        <div className="tcb-text text-center">
                            <h2>Clothes Sales</h2>
                            <p>Shop New Season Clothing</p>
                            <a href="product-page.html">View More</a>
                        </div>
                    </div>
                </div>
                {/* <!-- top category box - 2 --> */}
                <div className="col-lg-4 col-md-6 col-12 mbl-show">
                    <div className="top-category-box section-top-margin">
                        <div className="tcb-img">
                            <img src="assets/img/Homepage/top-category-img-2.png" alt=""/>
                        </div>
                        <div className="tcb-text text-center">
                            <h2>Smart Casuals</h2>
                            <p>Shop New Season Clothing</p>
                            <a href="product-page.html">View More</a>
                        </div>
                    </div>
                </div>
                {/* <!-- top category box - 2 --> */}
                <div className="col-lg-4 col-md-6 col-12 mbl-hide">
                    <div className="top-category-box section-top-margin">
                        <div className="tcb-text tcb-top-text-style text-center">
                            <h2>Smart Casuals</h2>
                            <p>Shop New Season Clothing</p>
                            <a href="product-page.html">View More</a>
                        </div>
                        <div className="tcb-img">
                            <img src="assets/img/Homepage/top-category-img-2.png" alt=""/>
                        </div>
                    </div>
                </div>
                {/* <!-- top category box - 3 --> */}
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="top-category-box section-top-margin">
                        <div className="tcb-img">
                            <img src="assets/img/Homepage/top-category-img-3.png" alt=""/>
                        </div>
                        <div className="tcb-text text-center">
                            <h2>Sustainable Fashion</h2>
                            <p>Shop New Season Clothing</p>
                            <a href="product-page.html">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default TopCategory