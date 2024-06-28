import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import GaleriContent from '../components/GaleriContent'
import ScrollButton from '../components/ScrollButton.jsx'

const Galeri = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <GaleriContent />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default Galeri