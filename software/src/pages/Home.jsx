import React from 'react'
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Testimonial from "../components/Testimonial .jsx";
import Footer from "../components/Footer.jsx";
import Working from "../components/Working.jsx";

const Home = () => {
    return (
        <div className='relative w-full min-h-screen'>
            <Hero/>
            <Features/>
            <Working/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}
export default Home
