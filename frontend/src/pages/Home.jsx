import React from 'react'
import Hero from '../components/Hero'
import LatestColletion from '../components/LatestColletion'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div className='pt-36'>
            <Hero />
            <LatestColletion />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}

export default Home
