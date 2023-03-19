import React from 'react'

function Hero() {
  return (
      <div>
          <section className="hero-section">
        <div className="container">
            <div className="row">
                {/* <!-- hero left --> */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="hero-left">
                        <div className="hl-text">
                            <span>SALE NOW ON</span>
                            <h2>Up to 50% Off</h2>
                            <p>Shopping is a bit of a relaxing hobby for me, which is sometimes
                                troubling for the bank balance want to try to make difficult people
                                somehow relatable.
                            </p>
                            <a href="product-page.html" className="btn1">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                {/* <!-- hero Right --> */}
                <div className="col-md-6 col-12 col-sm-12 hero-right-none">
                    <div className="hero-right">
                        <div className="hr-img">
                            <img src="assets/img/Homepage/hero-right-img.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero