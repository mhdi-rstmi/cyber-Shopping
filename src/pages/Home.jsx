import React from 'react'
import { AllCategories, Banner, DiscountProducts, GetStarted, Hero, NewProducts, PopularProducts } from '../components'

function Home() {
    return (
        <div>
            <Hero />
            <GetStarted />
            <AllCategories />
            <NewProducts />
            <PopularProducts />
            <DiscountProducts />
            <Banner />
        </div>
    )
}

export default Home