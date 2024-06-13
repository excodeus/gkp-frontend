import React from 'react'
import logo from '../assets/logo.png'
import { FiPhoneCall } from "react-icons/fi";

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
                    <div className="mb-8 flex items-center">
                        <img src={logo} alt="GKP Logo" className="h-36" />
                    </div>

                    {/* <!-- Column 2: Alamat --> */}
                    <div className='mt-12'>
                        <h3 className='font-bold text-gkpgreen text-xl '>PT. GLORY KATRI PUTERA</h3>
                    </div>

                    {/* <!-- Column 3: More Info --> */}
                    <div className='w-[30%]'>
                    <h5 className="text-gkpgreen text-md font-semibold mb-4">Our Address :</h5>
                    <p className="text-gkpgreen text-sm">Jl. RS. SOEKAMTO, KOMPLEK BUARAN PERSADA NO.19 - DUREN SAWIT, Kota Administrasi Jakarta Timur, DKI Jakarta - 13450, Indonesia</p>
                    </div>

                    {/* <!-- Column 4: Kontak --> */}
                    <div>
                        <h5 className="text-gkpgreen text-md font-semibold mb-4">More Information :</h5>
                        {/* <p className="text-gkpgreen text-sm">Email: info@gkp.com</p> */}
                        <div className='flex'>
                            <FiPhoneCall size={18} className='text-gkpgreen'/>
                            <p className="text-gkpgreen text-sm">(123) 456-7890</p>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                            <p className="text-gkpgreen text-sm">ptglorykatriputera</p>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                            <p className="text-gkpgreen text-sm">glorykatriputera</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center text-xs my-4">
                    <hr className='border-green-700'/>
                    <p className="text-gkpgreen pt-8">&copy; 2024 Glory Katri Putera. All rights reserved.</p>
                </div>
            </div>
    </div>
  )
}

export default Footer