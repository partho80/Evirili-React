import React from 'react'
import Discount from '../component/Discount/Discount'
import Hero from '../component/Hero/Hero'
import LlatestNews from '../component/LatestNews/LlatestNews'
import Review from '../component/Review/Review'
import TopCategory from '../component/TopCategory/TopCategory'
import TrendyProduct from '../component/TrendyProduct/TrendyProduct'

function Home() {
  return (
      <div>
          
          <Hero />
          <TopCategory />
          <TrendyProduct />
          <Review />
          <Discount />
          <LlatestNews />
          
          
    </div>
  )
}

export default Home