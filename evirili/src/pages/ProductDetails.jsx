import React from 'react'
import Product from '../component/ProductDetails/Product'
import ProductDetailsHero from '../component/ProductDetails/ProductDetailsHero'
import ProductDetailsTop from '../component/ProductDetails/ProductDetailsTop'
import Tab from '../component/Tab/Tab'

function ProductDetails() {
  return (
      <div>
          <ProductDetailsHero />
          <ProductDetailsTop />
          <Tab />
          <Product/>
    </div>
  )
}

export default ProductDetails