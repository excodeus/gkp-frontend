import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Jumbotron from '../components/Jumbotron.jsx'
import Strength from '../components/Strength.jsx'
import Agents from '../components/Agents.jsx'
import ArtikelContent from '../components/ArtikelContent.jsx'
import Footer from '../components/Footer.jsx'
import ScrollButton from '../components/ScrollButton.jsx'

const Home = () => {
  return (
    <>
        <Navbar />
        <Jumbotron />
        <Strength />
        <Agents />
        <ArtikelContent />
        <Footer />
        <ScrollButton />
    </>
  )
}

export default Home