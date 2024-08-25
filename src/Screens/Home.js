import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Tips from '../Components/Tips'
import Sport from '../Components/Sport'
import Picks from '../Components/Picks'
import Prediction from '../Components/Prediction'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Tips/>
        <Sport/>
        <Picks/>
        <Prediction/>
        <Footer/>
    </div>
  )
}

export default Home