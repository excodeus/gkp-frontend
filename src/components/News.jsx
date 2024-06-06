import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {

    return (
        <div className="py-16">
            <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
                
                {/* <!-- Card 1 --> */}
                <Link to="/artikel/detail_artikel" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 1" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 1</h3>
                        <p className="text-gray-600">This is a brief description of service 1.</p>
                    </div>
                </Link>
                
                {/* <!-- Card 2 --> */}
                <a href="detail_karir2.html" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 2</h3>
                        <p className="text-gray-600">This is a brief description of service 2.</p>
                    </div>
                </a>
                
                {/* <!-- Card 3 --> */}
                <a href="detail_karir3.html" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 3" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 3</h3>
                        <p className="text-gray-600">This is a brief description of service 3.</p>
                    </div>
                </a>
                
                {/* <!-- Card 4 --> */}
                <a href="detail_karir4.html" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 4" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 4</h3>
                        <p className="text-gray-600">This is a brief description of service 4.</p>
                    </div>
                </a>
                
                {/* <!-- Card 5 --> */}
                <a href="detail_karir5.html" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 5" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 5</h3>
                        <p className="text-gray-600">This is a brief description of service 5.</p>
                    </div>
                </a>
                
                {/* <!-- Card 6 --> */}
                <a href="detail_karir6.html" className="bg-white rounded-lg overflow-hidden shadow-lg card">
                    <img src="https://via.placeholder.com/400x300" alt="Service 6" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Service 6</h3>
                        <p className="text-gray-600">This is a brief description of service 6.</p>
                    </div>
                </a>
            </div>
            </div>

            {/* <!-- Pagination --> */}
            <div aria-label="Page navigation example" className="mt-8">
                <ul className="flex items-center -space-x-px h-8 text-sm justify-center">
                <li>
                    <a href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-green-200 hover:text-green-700 ">
                    <span className="sr-only">Previous</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5 1 1 5l4 4" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-100 hover:text-green-700 active:bg-green-300">1</a>
                </li>
                <li>
                    <a href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-100 hover:text-green-700 active:bg-green-300">2</a>
                </li>
                <li>
                    <a href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-100 hover:text-green-700 active:bg-green-300">3</a>
                </li>
                <li>
                    <a href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-green-100 hover:text-green-700">
                    <span className="sr-only">Next</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default News