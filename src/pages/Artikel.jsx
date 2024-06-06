import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Services from '../components/News'
import ScrollButton from '../components/ScrollButton'

const Artikel = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Services />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default Artikel