import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import ScrollButton from '../components/ScrollButton'

const ProdukKategori = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Kategori />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default ProdukKategori