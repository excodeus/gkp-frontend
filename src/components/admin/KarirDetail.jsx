import React from 'react'

const KarirDetail = () => {
  return (
    <>
        <div className="px-4 sm:ml-64">
            {/* <!-- DETAIL KARIR --> */}
            <div className="max-w-screen-xl mx-auto py-2 px-4">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Nama Lowongan: Frontend Developer</h1>
                    <h2 className="text-xl font-semibold mb-8">Posisi: Jakarta</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* <!-- Informasi Kontak --> */}
                        <div>
                        <h3 className="text-lg font-semibold mb-2">Informasi Kontak</h3>
                        <p className="text-gray-600 mb-1">Nama Kontak: John Doe</p>
                        <p className="text-gray-600 mb-1">Email: john.doe@example.com</p>
                        <p className="text-gray-600 mb-1">Telepon: 123-456-7890</p>
                        </div>
                        {/* <!-- Deskripsi Pekerjaan --> */}
                        <div>
                        <h3 className="text-lg font-semibold mb-2">Deskripsi Pekerjaan</h3>
                        <p className="text-gray-600 mb-4">
                            Kami mencari Frontend Developer yang berpengalaman untuk bergabung dengan tim kami. Tanggung jawab Anda
                            meliputi mengembangkan dan memelihara antarmuka pengguna yang responsif dan efisien menggunakan teknologi
                            web modern.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Kualifikasi:
                        <ul className="list-disc list-inside">
                            <li>Pengalaman minimal 3 tahun dalam pengembangan frontend</li>
                            <li>Memahami HTML, CSS, dan JavaScript</li>
                            <li>Pengalaman dengan framework frontend seperti React atau Vue.js</li>
                        </ul>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Tanggung jawab:
                        <ul className="list-disc list-inside">
                            <li>Mengembangkan fitur baru untuk aplikasi web</li>
                            <li>Memelihara kode yang ada dan memperbaiki bug</li>
                            <li>Bekerja sama dengan tim backend untuk mengintegrasikan API</li>
                        </ul>
                        </p>
                        <p className="text-gray-600">
                            Jika Anda tertarik, silakan kirimkan CV dan portofolio Anda ke email di atas.
                        </p>
                        </div>
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
                <span>Edit</span>
                </button>

                {/* <!-- Delete button on the right --> */}
                <button data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                className="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-red-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd" />
                    </svg>
                    Delete
                </button>
                <div className="ml-auto text-2xl font-bold px-6 py-4 text-green-500">
                    Active
                </div>
            </div>

            {/* Modals */}

            <div id="edit-modal" tabIndex="-1" aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="edit-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-green-700 dark:text-white">EDIT KARIR
                            </h3>
                        
                            <div
                                className="mb-5 w-full max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="judul"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">
                                            Nama Lowongan
                                        </label>
                                        <input type="judul" name="judul" id="judul"
                                            className="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="judul"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">
                                            Posisi Lowongan
                                        </label>
                                        <input type="judul" name="judul" id="judul"
                                            className="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="deskripsi"
                                            className="block mb-2 text-sm font-medium text-green-700 dark:text-white">Deskripsi</label>
                                        <textarea id="deskripsi" rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write your thoughts here..."></textarea>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center">
                                            <div className="p-3">
                                            </div>
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
                                <button data-modal-target="popupedit-modal" data-modal-toggle="popupedit-modal"
                                    className="flex items-center bg-green-500 text-white hover:text-white border border-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800"
                                    type="button">
                                    Tambah
                                </button>
                            </div>
                        </div>
                    
                        <div id="popupedit-modal" tabIndex="-1"
                        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="popupedit-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="flex flex-col items-center p-6 text-center">
                                        <h1 className="mb-5 text-3xl font-normal text-gray-900 dark:text-gray-400">
                                        Karir Berhasil Diubah!
                                        </h1>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-12 h-12 text-green-500 fill-green dark:text-gray-400">
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

            <div id="delete-modal" tabIndex="-1"
                className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="delete-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
                                Apakah anda yakin ingin menghapus Karir?</h3>
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

export default KarirDetail