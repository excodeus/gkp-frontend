import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-gkpgreen border-gray-200 "> {/** dark:bg-gray-900 */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt="GKP logo" />
                <span className="self-center text-2xl text-gkpgreen font-semibold whitespace-nowrap"> {/** dark:text-white */}
                    GLORY KATRI PUTERA
                </span>
            </Link>
            <ul className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-8">
                <li>
                    <Link to="/karir"
                    className="text-gkpgreen font-bold hover:text-gray-900 "> {/** dark:text-gray-300 dark:hover:text-white */}
                        Career
                    </Link>
                </li>
                <li>
                    <Link to="/produk_kategori"
                    className="text-gkpgreen font-bold hover:text-gray-900 "> {/** dark:text-gray-300 dark:hover:text-white */}
                        Product
                    </Link>
                </li>
                <li>
                    <Link to="/galeri"
                    className="text-gkpgreen font-bold hover:text-gray-900 "> {/** dark:text-gray-300 dark:hover:text-white */}
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="/terbaru"
                    className="text-gkpgreen font-bold hover:text-gray-900 "> {/** dark:text-gray-300 dark:hover:text-white */}
                        What's New?
                    </Link>
                </li>
                <li>
                    <Link to="/artikel"
                    className="text-gkpgreen font-bold hover:text-gray-900  "> {/** dark:text-gray-300 dark:hover:text-white */}
                        Article
                    </Link>
                </li>
                <li>
                    <Link to="/tentang"
                    className="text-gkpgreen font-bold hover:text-gray-900  "> {/** dark:text-gray-300 dark:hover:text-white */}
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