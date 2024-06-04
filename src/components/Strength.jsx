import React from 'react'
import { TbCertificate } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const Strength = () => {
  return (
    <div className="text-center mt-16 mb-20 mx-10"> 
        <h2 className="text-gkpgreen text-3xl font-bold mb-8">WHY CHOOSE US?</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center mt-10">
            {/* <!-- Card 1 --> */}
            <div className="max-w-sm w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-lg bg-gkpgreen">  
                <div className="p-16">
                    <div className='grid grid-cols-2'>
                        <TbCertificate size={80} color='bg-gkpgreen' className='ml-4'/>                   
                        <div className="text-gkpgreen font-bold text-xl mb-2">
                            GKP is certified
                            <p className="text-gkpgreen text-base">
                                with CDOB from BPOM RI
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="max-w-sm w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                <div className="p-10">
                    <div className='grid grid-cols-2'>
                        <FaBoxOpen size={80} color='bg-gkpgreen' className='ml-6 mt-8'/>
                        <div className="text-black font-bold text-lg mb-2">
                            We provide a wide range of products and assure to be high quality.
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="max-w-sm h-[220px] rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                <div className="p-16">
                    <div className='grid grid-cols-2'>
                        <RiCustomerService2Fill size={80} color='bg-gkpgreen' className='ml-4' />
                        <div className="text-black font-bold text-lg mb-2">
                            We provide courteous and helpful service
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div className="max-w-sm w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-lg bg-gkpgreen">
                <div className="p-16">
                    <div className='grid grid-cols-2'>
                        <FaHandshake size={80} color='bg-gkpgreen' className='ml-4'/>
                        <div className="text-gkpgreen font-bold text-lg mb-2">
                            Trusted as the sole agent for many products
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Strength