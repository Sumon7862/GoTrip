import React from 'react'
import Banner from '../components/Banner';
import WhyChoose from '../components/WhyChoose';
import BelowBanner from '../components/BelowBanner';
import Offer from '../components/Offer';

const Home = () => {
    return (
        <>
            <Banner />
            <BelowBanner/>
            <Offer/>
            <WhyChoose />
        </>
    )
}

export default Home;
