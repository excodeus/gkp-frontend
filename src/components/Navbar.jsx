import React from 'react'
import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {

    // const handleScroll = () => {
    //     const navbar = document.querySelector('.navbar')
    //     const opacity = Math.min(1, window.scrollY / 10)
    //     navbar.style.opacity = opacity
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)

    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

  return (
    <div className="p-6 top-0 z-40 bg-gkpgreen"> 
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-14 p-6">
            <Link to="/" className="flex items-center">
                <img src={logo} className="h-20 mr-3" alt="GKP logo" />
                <span className="self-center text-3xl text-gkpgreen font-semibold whitespace-nowrap"> 
                    GLORY KATRI PUTERA
                </span>
            </Link>
            <ul className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-8">
                <li>
                    <Link to="/karir"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900 "> 
                        Career
                    </Link>
                </li>
                <li>
                    <Link to="/produk_kategori"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900 "> 
                        Product
                    </Link>
                </li>
                <li>
                    <Link to="/galeri"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900 "> 
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="/terbaru"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900 "> 
                        What's New?
                    </Link>
                </li>
                <li>
                    <Link to="/artikel"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900  "> 
                        Article
                    </Link>
                </li>
                <li>
                    <Link to="/tentang"
                    className="text-gkpgreen text-xl font-bold hover:text-gray-900  "> 
                        About Us
                    </Link>
                </li>
            </ul>
        </div>

        <Outlet />
    </div>
  )
}

export default Navbar