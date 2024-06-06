import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import News from '../components/News'
import ScrollButton from '../components/ScrollButton'

const Terbaru = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <News />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default Terbaru