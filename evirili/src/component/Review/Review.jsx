import React from 'react'

function Review() {
  return (
      <div>
          <section className="review-section section-top-padding">
        <div className="container">
            {/* <!-- section header --> */}
            <div className="row">
                <div className="col-md-12 col-12-col-sm-12">
                    <div className="section-header text-center">
                        <h2>REVIEW</h2>
                    </div>
                </div>
            </div>

            {/* <!-- section content --> */}
            <div className="row">
                {/* <!-- left - slider --> */}
                <div className="col-lg-6 col-md-12">
                    <div className="product-view-slider section-top-margin">
                        {/* <!-- testimonial-carousel owl-carousel owl-theme --> */}
                        <div className="product_slider owl-carousel owl-theme">
                            <div className="item">
                                <div className="product-content">
                                    <h2>Red High Wedage</h2>
                                    <img src="assets/img/Homepage/product-slider--item-1.png" alt=""/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product-content">
                                    <h2>Red High Wedage</h2>
                                    <img src="assets/img/Homepage/product-slider--item-1.png" alt=""/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product-content">
                                    <h2>Red High Wedage</h2>
                                    <img src="assets/img/Homepage/product-slider--item-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- right - rating --> */}
                <div className="col-lg-6 col-md-12">
                    <div className="product-rating section-top-margin">
                        {/* <!-- top rating box --> */}
                        <div className="content-header-box">
                            <h2>Rating Criteria</h2>
                            <p>Rating</p>
                        </div>
                        {/* <!-- rating list table --> */}
                        <div className="pr-list-table">
                                  <table>
                                    <tbody>
                                {/* <!--row -->/ */}
                                <tr>
                                          <td style={{ borderRight: 'none'}}>Product Delivery</td>
                                    <td className="plt-style" style={{ borderRight: 'none'}}>
                                        <ul className="pull-right">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-half-o"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                                {/* <!-- row --> */}
                                <tr>
                                    <td style={{ borderRight: 'none'}}>Quality of Content</td>
                                    <td className="plt-style" style={{ borderRight: 'none'}}>
                                        <ul className="pull-right">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                                {/* <!-- row --> */}
                                <tr>
                                    <td style={{ borderRight: 'none'}}>Guarantee</td>
                                    <td className="plt-style" style={{ borderRight: 'none'}}>
                                        <ul className="pull-right">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                                {/* <!-- row --> */}
                                <tr>
                                    <td style={{ borderRight: 'none'}}>Price</td>
                                    <td className="plt-style" style={{ borderRight: 'none'}}>
                                        <ul className="pull-right">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </td>
                                </tr>
                                {/* <!-- row --> */}
                                <tr>
                                    <td style={{ borderRight: 'none'}}>Ease of Use</td>
                                    <td className="plt-style" style={{ borderRight: 'none'}}>
                                        <ul className="pull-right">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-half-o"></i></li>
                                        </ul>
                                    </td>
                                          </tr>
                                          </tbody>
                            </table>
                        </div>
                        {/* <!-- bottom rating box --> */}
                        <div className="content-header-box">
                            <h2>Overall Rating (4.9)</h2>
                            <p>Overall User (1K)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Review