import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
      <div>
           <header className="header-main">
        {/* <!-- top header --> */}
        <div className="top-header">
            <div className="container">
                <div className="row">
                    {/* <!-- social link --> */}
                    <div className="col-md-4 col-12 col-sm-3">
                        <div className="social-media-icon text-left">
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
                    {/* <!-- Welcome Massage --> */}
                    <div className="col-md-4 col-8 col-sm-6">
                        <div className="welcome-massage text-center">
                            <p>Welcome to our website</p>
                        </div>
                    </div>
                    {/* <!-- single icon --> */}
                    <div className="col-md-4 col-4 col-sm-3">
                        <div className="single-icon pull-right">
                            <ul>
                                <li><a href="#"><img src="assets/img/icon/people-icon.png"
                                            alt="evirili people icon"/></a></li>
                                <li><a href="shopping-cart.html"><img src="assets/img/icon/cart-icon.png"
                                            alt="cart"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- main header --> */}
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <a href="index.html" className="navbar-brand nb-img">
                                <img src="assets/img/Homepage/main-logo.png" alt="Barnd logo"/>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mynav">
                                <i className="fa fa-bars mobile-nav-icon" aria-hidden="true"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="mynav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"><NavLink className="nav-link" to='/' activeclassname="active" >Home</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            Pages
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item active" to='/ProductDetails'  >Product Details</NavLink>
                                            <Link className="dropdown-item" to='/Cart'>Cart</Link>
                                            <Link className="dropdown-item" to='/Checkout'>Checkout</Link>
                                            <Link className="dropdown-item" to='/BlogDetails'>Blog Details</Link>
                                            <Link className="dropdown-item" to='Error'>404</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to='/Blog' activeclassname="active">Blog</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to='Shop' activeclassname="active">Shop</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to='/Contact' activeclassname="active">Contact</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="lang-currency-wrapper">
                            <ul>
                                <li>
                                    <div className="lang-selector">
                                        <img src="assets/img/Homepage/flag-1.png" alt=""/>
                                        <select>
                                            <option value="">English US</option>
                                            <option value="">English UK</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="currency-dd">
                                        <select>
                                            <option value="0">$ USD</option>
                                            <option value="0">$ USD</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
    </div>
  )
}

export default Header