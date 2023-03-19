import React from 'react'

function Discount() {
  return (
      <div>
           <section className="discount-banner-section">
        <div className="container">
            <div className="row">
                {/* <!-- left --> */}
                <div className="col-md-6 col-1 col-sm-12">
                    <div className="dbs-left text-center">
                        <div className="dbsl-img">
                            <img src="assets/img/Homepage/discount-left-img.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                    <div className="dbs-right text-center">
                        <img src="assets/img/Homepage/discount-right-bg-img.png" alt="" className="dbl-right-bg"/>
                    </div>
                    <div className="dbsr-content">
                        <div className="dbsr-title">
                            <h2>DISCOUNTED</h2>
                            <p>BEST COLLECTIONS</p>
                        </div>
                        <div className="dbsr-discount-rate">
                            <h2>30% OFF</h2>
                            <p>SALE GOING ON</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Discount