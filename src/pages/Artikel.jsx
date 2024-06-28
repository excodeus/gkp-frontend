import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ArtikelContent from '../components/ArtikelContent'
import ScrollButton from '../components/ScrollButton'

const Artikel = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <ArtikelContent />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default Artikel