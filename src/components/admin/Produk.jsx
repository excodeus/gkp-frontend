import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Produk = () => {

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
                                            <path fillRule="evenodd"
                                                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                                                clipRule="evenodd" />
                                        </svg>
                                        Urutkan
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2" d="m1 1 4 4 4-4" />
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
                                                    <label htmlFor="filter-radio-example-1"
                                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Menunggu</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                    <input id="filter-radio-example-2" type="radio" value=""
                                                        name="filter-radio"
                                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                                                    <label htmlFor="filter-radio-example-2"
                                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Selesai</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nama Produk
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Kategori Produk
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        className="bg-white border-b ">

                                        <td className="px-6 py-4">
                                            1
                                        </td>
                                        <td className="px-6 py-4">
                                            Jamu
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            Herbal
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to="/admin/produk/detail"
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr
                                        className="bg-white border-b hover:bg-gray-50 ">

                                        <td className="px-6 py-4">
                                            2
                                        </td>
                                        <td className="px-6 py-4">
                                            Terigu
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            Makanan
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#"
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Detail</a>
                                        </td>
                                    </tr>
                                    <tr
                                        className="bg-white border-b hover:bg-gray-50 ">

                                        <td className="px-6 py-4">
                                            3
                                        </td>
                                        <td className="px-6 py-4">
                                            Lipstik
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            Kosmetik
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#"
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Detail</a>
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

                        <div className="flex">
                            <button data-modal-target="produk-modal" data-modal-toggle="produk-modal"
                                className="m-5 flex items-center bg-green-700 text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="m-1 w-6 h-6 mr-1">
                                    <path fillRule="evenodd"
                                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                        clipRule="evenodd" />
                                </svg>
                                <span>
                                    Tambah Produk
                                </span>
                            </button>
                        </div>
                        {/* <!-- Modal toggle --> */}

                        {/* <!-- Tambah modal --> */}
                        <div id="produk-modal" tabIndex="-1" aria-hidden="true"
                            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div className="relative bg-white rounded-lg shadow ">
                                    <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                                        data-modal-hide="produk-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="px-6 py-6 lg:px-8">
                                        <h3 className="mb-4 text-xl font-medium text-green-700">
                                            TAMBAH PRODUK
                                        </h3>
                                        <div
                                            className="mb-5 w-full max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 ">
                                            <form className="space-y-6" action="#">
                                                <div>
                                                    <label htmlFor="judul"
                                                        className="block mb-2 text-sm font-medium text-green-700 ">
                                                        Nama Produk
                                                    </label>
                                                    <input type="judul" name="judul" id="judul"
                                                        className="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 "
                                                        placeholder="" required/>
                                                </div>
                                                <div>
                                                    <label htmlFor="judul"
                                                        className="block mb-2 text-sm font-medium text-green-700 ">
                                                        Kategori
                                                    </label>
                                                    <select id="category"
                                                        className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg hover:border-green-500 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 ">
                                                        <option defaultValue="MK">Pilih Kategori</option>
                                                        <option value="MK">Makanan</option>
                                                        <option value="KS">Kosmetik</option>
                                                        <option value="HB">Herbal</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="deskripsi"
                                                        className="block mb-2 text-sm font-medium text-green-700 ">Deskripsi</label>
                                                    <textarea id="deskripsi" rows="4"
                                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-green-500 focus:ring-green-500 focus:border-green-500 "
                                                        placeholder="Write your thoughts here..."></textarea>
                                                </div>
                                                <div className="w-full">
                                                        <div className="flex items-center justify-center w-full">
                                                            <label htmlFor="dropzone-file"
                                                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                                                
                                                                <div
                                                                    className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                    <svg className="w-8 h-8 mb-4 text-gray-500 "
                                                                        aria-hidden="true"
                                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                        viewBox="0 0 20 16">
                                                                        <path stroke="currentColor" strokeLinecap="round"
                                                                            strokeLinejoin="round" strokeWidth="2"
                                                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                    </svg>
                                                                    <p
                                                                        className="mb-2 text-sm text-gray-500 ">
                                                                        <span className="font-semibold">Click to upload</span>
                                                                        or drag and drop</p>
                                                                    <p className="text-xs text-gray-500 ">SVG,
                                                                        PNG, JPG or GIF (MAX. 800x400px)</p>
                                                                </div>
                                                                <input id="dropzone-file" type="file" className="hidden" />
                                                            </label>
                                                        </div>
                                                </div>


                                            </form>
                                        </div>


                                        <div className="flex items-center justify-center">
                                            <button
                                                className="flex items-center bg-red-500 text-white hover:text-white border border-red-700 hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Batal
                                            </button>
                                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                                className="flex items-center bg-green-500 text-white hover:text-white border border-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Tambah
                                            </button>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                            <div id="popup-modal" tabIndex="-1"
                                className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow ">
                                        <button type="button"
                                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                                            data-modal-hide="popup-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                    strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        <div className="flex flex-col items-center p-6 text-center">
                                            <h1 className="mb-5 text-3xl font-normal text-gray-900 ">
                                                Produk Berhasil Ditambahkan!
                                            </h1>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-12 h-12 text-green-500 fill-green ">
                                                    <path fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                        clipRule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>

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

export default Produk