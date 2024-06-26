import React, { useEffect } from 'react'

const Artikel = () => {

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
        <div className="px-4 sm:ml-64">
            <div className="px-4 py-0 rounded-lg">
                <div className="px-4 sm:ml-34">
                    <div className="px-4 py-0 rounded-lg">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            
                            <div className="flex items-center justify-between pb-4">
                                <div>
                                    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                                        className="inline-flex items-center text-green-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                                        type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="size-6 m-2">
                                            <path fill-rule="evenodd"
                                                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Urutkan
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdownRadio"
                                        className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute m-0"
                                        style={{ inset: 'auto auto 0px 0px', transform: 'translate3d(522.5px, 3847.5px, 0px)' }}
                                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                        <ul className="p-3 space-y-1 text-sm text-gray-700 "
                                            aria-labelledby="dropdownRadioButton">
                                            <li>
                                                <div
                                                    className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                    <input id="filter-radio-example-1" type="radio" value=""
                                                        name="filter-radio"
                                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                                                    <label for="filter-radio-example-1"
                                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Menunggu</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                    <input checked="" id="filter-radio-example-2" type="radio" value=""
                                                        name="filter-radio"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                                                    <label for="filter-radio-example-2"
                                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Selesai</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Judul
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tanggal Publish
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        className="bg-white border-b  hover:bg-gray-50 ">

                                        <td className="px-6 py-4">
                                            1
                                        </td>
                                        <td className="px-6 py-4">
                                            Judul 1
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            Sabtu, 09 / Sept / 2021
                                        </td>
                                        <td className="px-6 py-4">
                                            
                                                <div className="flex">
                                                    <a href="#"
                                                    className="m-2 mt-5 px-7 py-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center mr-2 mb-2 ">Detail</a>
        
                                                    {/* <!-- Delete button on the right --> */}
                                                    <button data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                                                        className="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-red-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
                                                        type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" className="w-6 h-6">
                                                            <path fill-rule="evenodd"
                                                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex items-center justify-between">
                                {/* <!-- Help text --> */}
                                <span className="px-4 text-sm text-gray-700 ">
                                    Showing <span className="font-semibold text-green-700 ">1</span> to <span
                                        className="font-semibold text-green-700 ">10</span> of <span
                                        className="font-semibold text-green-700 ">100</span> Entries
                                </span>

                                {/* <!-- Buttons --> */}
                                <div className="flex items-center mt-2 xs:mt-0">
                                    <button type="button"
                                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Prev</button>

                                    <button type="button"
                                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Next</button>

                                </div>
                            </div>

                        </div>
                        
                        <button
                            className="m-5 flex items-center bg-green-700 text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="m-1 w-6 h-6 mr-1">
                                <path fill-rule="evenodd"
                                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                Tambah Artikel
                            </span>
                        </button>

                        <div id="delete-modal" tabindex="-1"
                        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow ">
                                    <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                        data-modal-hide="delete-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg className="mx-auto mb-4 text-red-500 w-12 h-12 "
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-900">
                                            Apakah anda yakin ingin menghapus Artikel?</h3>
                                        <button data-modal-hide="delete-modal" type="button"
                                            className="text-white bg-red-500 border-red-500 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Tidak
                                        </button>
                                        <button data-modal-hide="delete-modal" type="button"
                                            className="text-white bg-green-500 border-green-500 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Ya
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Artikel