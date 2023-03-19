import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import NewsLatter from "./component/NewsLatter/NewsLatter"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Shop from "./pages/Shop"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />         
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/BlogDetails' element={<BlogDetails />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Shop' element={<Shop />} />
          <Route exact path='/Checkout' element={<Checkout />} />
          <Route exact path='/Error' element={<Error />} />
          <Route exact path='/ProductDetails' element={<ProductDetails />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>  
        <NewsLatter/>
        <Footer />
        </Router>
   </div>
  )
}

export default App






 {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Error/> */}
      {/* <Blog/> */}
      {/* <Checkout/> */}
      {/* <Cart/> */}
      {/* <ProductDetails/> */}
