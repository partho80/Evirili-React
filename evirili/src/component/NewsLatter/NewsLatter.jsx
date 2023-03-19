import React from 'react'

function NewsLatter() {
  return (
      <div>
           <section className="newsletter-area">
        <div className="container">
            <div className="nl-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <form className="nl-form">
                            <h4>Brighten up your inbox!</h4>
                            <div className="nl-group">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                <input type="text" placeholder=""/>
                                <button type="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                            </div>
                        </form>
                        <div className="nl-social">
                            <ul>
                                <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"
                                            aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
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
    </section>
    </div>
  )
}

export default NewsLatter