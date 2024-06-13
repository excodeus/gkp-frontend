import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="relative mt-48">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 left-0 w-full z-10'>
            <path fill="#b1e4a7" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,74.7C480,96,600,128,720,138.7C840,149,960,139,1080,128C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg> */}
        <svg viewBox="0 0 1920 672" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-0 w-full z-10'>
            <path fillOpacity="1" d="M1920 134.579C1806.05 252.771 1380.85 302.962 884.956 246.816C500.12 203.245 171.101 106.774 3.47163 0H0V672H1920V134.579Z" fill="#B1E4A7"/>
        </svg>
            <div className="relative z-20 max-w-screen-xl mx-auto px-4 pt-4 pb-4">
                <div className="flex justify-around">

                    {/* <!-- Column 1: Logo GKP --> */}
                    <div className="flex items-center">
                        <img src={logo} alt="GKP Logo" className="h-36" />
                    </div>

                    {/* <!-- Column 2: Alamat --> */}
                    <div className='mb-16 w-[30%]'>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">Address</h5>
                        <p className="text-gkpgreen text-sm">Jl. RS. SOEKAMTO, KOMPLEK BUARAN PERSADA NO.19 - DUREN SAWIT, Kota Administrasi Jakarta Timur, DKI Jakarta - 13450, Indonesia</p>
                    </div>

                    {/* <!-- Column 3: More Info --> */}
                    <div className='mb-16'>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">More Information</h5>
                        <p className="text-gkpgreen text-sm">Email: info@gkp.com</p>
                        <p className="text-gkpgreen text-sm">Telepon: (123) 456-7890</p>
                        <p className="text-gkpgreen text-sm">Instagram: ptglorykatriputera</p>
                        <p className="text-gkpgreen text-sm">Facebook: glorykatriputera</p>
                    </div>

                    {/* <!-- Column 4: Kontak --> */}
                    <div className='mb-16'>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">Contact Us</h5>
                        <textarea name="" id="" className="rounded-md border-0 p-2 text-xs resize-none w-[200px] h-[72px]"></textarea>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center text-xs my-8">
                    <p className="text-gkpgreen">&copy; 2024 Glory Katri Putera. All rights reserved.</p>
                </div>
            </div>
    </div>
  )
}

export default Footer