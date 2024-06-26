import React from 'react'

const ProdukDetail = () => {
  return (
    <>
        <div className="px-4 sm:ml-64 p-6">

            <div className="container mx-auto">
                {/* <!-- Single Product --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
                        <img className="h-auto w-full object-cover hover-effect rounded"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Product Image"/>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Title</h2>
                        <p className="text-gray-700">This is a brief description of the product. It provides context and details
                            about the product features and specifications.</p>
                    </div>
                </div>
            </div>

            <div className="flex px-5 ">
                <button data-modal-target="edit-modal" data-modal-toggle="edit-modal"
                    className="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-yellow-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path
                            d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                    Edit
                </button>

                
                <button data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                    className="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-red-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clip-rule="evenodd" />
                    </svg>
                    Delete
                </button>
            </div>

            <div id="edit-modal" tabindex="-1" aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                
                <div className="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="edit-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-green-700 dark:text-white">EDIT PRODUK
                            </h3>
                            <div
                                className="mb-5 w-full max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="judul"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">
                                            Nama Produk
                                        </label>
                                        <input type="judul" name="judul" id="judul"
                                            className="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="judul"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">
                                            Kategori
                                        </label>
                                        <select id="category"
                                            className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg hover:border-green-500 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Pilih Kategori</option>
                                            <option value="MK">Makanan</option>
                                            <option value="KS">Kosmetik</option>
                                            <option value="HB">Herbal</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="deskripsi"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">Deskripsi</label>
                                        <textarea id="deskripsi" rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write your thoughts here..."></textarea>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file"
                                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                
                                                <div
                                                    className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p
                                                        className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span>
                                                        or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG,
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
                                    className="flex items-center bg-red-500 text-white hover:text-white border border-red-700 hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800"
                                    type="button">
                                    Batal
                                </button>
                                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                    className="flex items-center bg-green-500 text-white hover:text-white border border-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800"
                                    type="button">
                                    Tambah
                                </button>
                            </div>
                            

                        </div>
                    </div>
                </div>

                <div id="popupedit-modal" tabindex="-1"
                    className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popupedit-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="flex flex-col items-center p-6 text-center">
                                <h1 className="mb-5 text-3xl font-normal text-gray-900 dark:text-gray-400">
                                    Produk Berhasil Diubah!
                                </h1>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-12 h-12 text-green-500 fill-green dark:text-gray-400">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="delete-modal" tabindex="-1"
                className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="delete-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 text-red-500 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-900">
                                Apakah anda yakin ingin menghapus Produk?</h3>
                            <button data-modal-hide="delete-modal" type="button"
                                className="text-white bg-red-500 border-red-500 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Tidak
                            </button>
                            <button data-modal-hide="delete-modal" type="button"
                                className="text-white bg-green-500 border-green-500 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Ya
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default ProdukDetail