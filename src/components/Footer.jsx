import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 left-0 w-full z-10'>
            <path fill="#b1e4a7" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,74.7C480,96,600,128,720,138.7C840,149,960,139,1080,128C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
            <div className="relative z-20 max-w-screen-xl mx-auto px-4 pt-8 pb-6">
                <div className="flex justify-around">

                    {/* <!-- Column 1: Logo GKP --> */}
                    <div className="flex items-center">
                        <img src={logo} alt="GKP Logo" className="h-36" />
                    </div>

                    {/* <!-- Column 2: Alamat --> */}
                    <div className='mt-20 w-[30%]'>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">Alamat</h5>
                        <p className="text-gkpgreen text-sm">Jl. RS. SOEKAMTO, KOMPLEK BUARAN PERSADA NO.19 - DUREN SAWIT, Kota Administrasi Jakarta Timur, DKI Jakarta - 13450, Indonesia</p>
                    </div>

                    {/* <!-- Column 3: Kontak --> */}
                    <div className='mt-20'>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">Kontak</h5>
                        <p className="text-gkpgreen text-sm">Email: info@gkp.com</p>
                        <p className="text-gkpgreen text-sm">Telepon: (123) 456-7890</p>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center text-sm mt-10">
                    <p className="text-gkpgreen">&copy; 2024 Glory Katri Putera. All rights reserved.</p>
                </div>
            </div>
    </div>
  )
}

export default Footer