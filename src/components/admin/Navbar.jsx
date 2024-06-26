import React, { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
    
    // Function to load the script dynamically
    const loadScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    };

    useEffect(() => {

        // Load the Flowbite script
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js');

        // Cleanup function to remove the script when the component unmounts
        return () => {
            const scripts = document.querySelectorAll('script[src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"]');
            scripts.forEach(script => document.body.removeChild(script));
        };
        }, []);

  return (
    <div>
        <nav className="bg-white border-gray-20 sm:ml-64 px-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* <!-- Breadcrumb --> */}
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to="/admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-700">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-green-700 md:ms-2">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* <!-- End Breadcrumb --> */}

                <div className="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-green-700  rounded-lg cursor-pointer hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="fill-green-700 mt-1 ml-1 w-6 h-6">
                            <path fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd" />
                        </svg>
                        Mr. Lorem Ipsum
                    </button>
                    {/* <!-- Dropdown --> */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
                        id="language-dropdown-menu">
                        <ul className="py-2 font-medium" role="none">
                            <li>
                                <div className="inline-flex items-center">
                                    {/* data-modal-target="change-modal" data-modal-toggle="change-modal" */}
                                    <button 
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 "
                                        type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" className="m-5 w-5 h-5">
                                            <path fillRule="evenodd"
                                                d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd" />
                                        </svg>
                                        Ganti Kata Sandi
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="inline-flex items-center">
                                    <Link to="/logout"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 "
                                        role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" className="m-5 w-5 h-5">
                                                <path fillRule="evenodd"
                                                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                                                    clipRule="evenodd" />
                                                <path fillRule="evenodd"
                                                    d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            Logout
                                        </div>
                                    </Link>
                                </div>
                    
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar