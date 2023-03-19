import React from 'react'

function LlatestNews() {
  return (
      <div>
           <section className="latest-news-section section-top-padding">
        <div className="container">
            {/* <!-- section header --> */}
            <div className="row lt-news">
                <div className="col-md-12 col-12-col-sm-12">
                    <div className="section-header text-center">
                        <h2>LATEST NEWS</h2>
                    </div>
                </div>
            </div>

            {/* <!-- section content --> */}
            <div className="row">
                {/* <!-- 1st news box --> */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="news-box">
                        <div className="nb-content">
                            <img src="assets/img/Homepage/news-img-1.png" alt=""/>
                            <div className="nb-hover-content">
                                <a href="blog-details.html" className="btn2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 2nd news box --> */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="news-box">
                        <div className="nb-content">
                            <img src="assets/img/Homepage/news-img-2.png" alt=""/>
                            <div className="nb-hover-content">
                                <a href="blog-details.html" className="btn2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 3rd news box --> */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="news-box">
                        <div className="nb-content">
                            <img src="assets/img/Homepage/news-img-3.png" alt=""/>
                            <div className="nb-hover-content">
                                <a href="blog-details.html" className="btn2">Read More</a>
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

export default LlatestNews