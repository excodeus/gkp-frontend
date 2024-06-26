import React from 'react'
import logo from '../../assets/logo.png'
import { Outlet, Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <aside id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gkpgreen">
                <a className="flex items-center pl-2.5 mb-5">
                    <img src={logo} className="h-6 mr-3 sm:h-7" alt="GLORY KATRI PUTERA" />
                    <span className="self-center font-semibold whitespace-nowrap">GLORY KATRI PUTERA</span>
                </a>
                <ul className="space-y-2 font-medium">
                    {/* Dashboard */}
                    <li>
                        <Link to="/admin"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    {/* Kelola Karir */}
                    <li>
                        <Link to="/admin/karir"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Kelola Karir</span>
                            <span
                                className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full "></span>
                        </Link>
                    </li>
                    {/* Kelola Produk */}
                    <li>
                        <Link to="/admin/produk"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">Kelola Produk</span>
                        </Link>
                    </li>
                    {/* Kelola Kategori */}
                    <li>
                        <Link to="/admin/kategori"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">Kelola Kategori</span>
                        </Link>
                    </li>
                    {/* Kelola Galeri */}
                    <li>
                        <Link to="/admin/galeri"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd"
                                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                clip-rule="evenodd" />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">Kelola Galeri</span>
                            
                        </Link>
                    </li>
                    {/* Kelola Artikel */}
                    <li>
                        <Link to="/admin/artikel"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-700 hover:text-white  group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                                    clip-rule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>


                            <span className="flex-1 ml-3 whitespace-nowrap">Kelola Artikel</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar