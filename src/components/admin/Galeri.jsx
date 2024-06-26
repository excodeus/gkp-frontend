import React, { useEffect } from 'react'

const Galeri = () => {

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
        <div class="px-4 sm:ml-64">
            <div class="px-4 py-0 rounded-lg">
                <div class="px-4 sm:ml-34">
                    <div class="px-4 py-0 rounded-lg">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            
                            <div class="flex items-center justify-between pb-4">
                                <div>
                                    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                                        class="inline-flex items-center text-green-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                                        type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="size-6 m-2">
                                            <path fill-rule="evenodd"
                                                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Urutkan
                                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdownRadio"
                                        class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute m-0"
                                        style={{ inset: 'auto auto 0px 0px', transform: 'translate3d(522.5px, 3847.5px, 0px)' }}
                                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                        <ul class="p-3 space-y-1 text-sm text-gray-700 "
                                            aria-labelledby="dropdownRadioButton">
                                            <li>
                                                <div
                                                    class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                    <input id="filter-radio-example-1" type="radio" value=""
                                                        name="filter-radio"
                                                        class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                                                    <label for="filter-radio-example-1"
                                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Menunggu</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                    <input checked="" id="filter-radio-example-2" type="radio" value=""
                                                        name="filter-radio"
                                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                                                    <label for="filter-radio-example-2"
                                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Selesai</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <table class="w-full text-sm text-left text-gray-500 ">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50  ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Judul Foto
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tanggal Foto
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="bg-white border-b  hover:bg-gray-50 ">

                                        <td class="px-6 py-4">
                                            1
                                        </td>
                                        <td class="px-6 py-4 text-gray-500">
                                            Factory Tour
                                        </td>
                                        <td class="px-6 py-4 text-gray-500">
                                            Sabtu, 9-September-2023
                                        </td>
                                        <td>
                                            <div class="flex">
                                                <button data-modal-target="authentication-modal"
                                                    data-modal-toggle="edit-modal"
                                                    class="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-yellow-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
                                                    type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
                                                        <path
                                                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                                        <path
                                                            d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                                    </svg>
                                                    <span>Edit</span>
                                                </button>

                                                <button data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                                                    class="m-2 mt-5 px-7 py-3 text-sm font-medium text-white inline-flex items-center bg-red-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
                                                    type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
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
                            <div class="flex items-center justify-between">
                                {/* <!-- Help text --> */}
                                <span class="px-4 text-sm text-gray-700 ">
                                    Showing <span class="font-semibold text-green-700 ">1</span> to <span
                                        class="font-semibold text-green-700 ">10</span> of <span
                                        class="font-semibold text-green-700 ">100</span> Entries
                                </span>

                                {/* <!-- Buttons --> */}
                                <div class="flex items-center mt-2 xs:mt-0">
                                    <button type="button"
                                        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Prev</button>

                                    <button type="button"
                                        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Next</button>

                                </div>
                            </div>

                        </div>

                        <div class="flex">
                            <button data-modal-target="tambah-modal" data-modal-toggle="tambah-modal"
                                class="m-5 flex items-center bg-green-700 text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="m-1 w-6 h-6 mr-1">
                                    <path fill-rule="evenodd"
                                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>
                                    Tambah Foto
                                </span>
                            </button>
                        </div>

                        {/* <!-- Tambah modal --> */}
                        <div id="tambah-modal" tabindex="-1" aria-hidden="true"
                            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div class="relative bg-white rounded-lg shadow ">
                                    <button type="button"
                                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                        data-modal-hide="tambah-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="px-6 py-6 lg:px-8">
                                        <h3 class="mb-4 text-xl font-medium text-green-700 ">TAMBAH FOTO
                                        </h3>
                                        <div
                                            class="mb-5 w-full max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 ">
                                            <form class="space-y-6" action="#">
                                                <div>
                                                    <label for="judul"
                                                        class="block mb-2 text-sm font-medium text-green-700 ">
                                                        Judul Foto
                                                    </label>
                                                    <input type="judul" name="judul" id="judul"
                                                        class="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 "
                                                        placeholder="" required/>
                                                </div>

                                                <div class="flex items-center justify-center w-full">
                                                    <label for="dropzone-file"
                                                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg class="w-8 h-8 mb-4 text-gray-500 "
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p class="mb-2 text-sm text-gray-500 "><span
                                                                    class="font-semibold">Click to upload</span> or drag and
                                                                drop</p>
                                                            <p class="text-xs text-gray-500 ">SVG, PNG,
                                                                JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" type="file" class="hidden" />
                                                    </label>
                                                </div>


                                            </form>
                                        </div>


                                        <div class="flex items-center justify-center">
                                            <button
                                                class="flex items-center bg-red-500 text-white hover:text-white border border-red-700 hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Batal
                                            </button>
                                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                                class="flex items-center bg-green-500 text-white hover:text-white border border-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Tambah
                                            </button>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                            <div id="popup-modal" tabindex="-1"
                                class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative w-full max-w-md max-h-full">
                                    <div class="relative bg-white rounded-lg shadow ">
                                        <button type="button"
                                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                            data-modal-hide="popup-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                        <div class="flex flex-col items-center p-6 text-center">
                                            <h1 class="mb-5 text-3xl font-normal text-gray-900 ">
                                                Foto Berhasil Ditambahkan!
                                            </h1>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-12 h-12 text-green-500 fill-green ">
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

                        {/* <!-- Edit modal --> */}
                        <div id="edit-modal" tabindex="-1" aria-hidden="true"
                            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div class="relative bg-white rounded-lg shadow ">
                                    <button type="button"
                                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                        data-modal-hide="edit-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="px-6 py-6 lg:px-8">
                                        <h3 class="mb-4 text-xl font-medium text-green-700 ">EDIT FOTO
                                        </h3>
                                        <div
                                            class="mb-5 w-full max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 ">
                                            <form class="space-y-6" action="#">
                                                <div>
                                                    <label for="judul"
                                                        class="block mb-2 text-sm font-medium text-green-700 ">
                                                        Judul Foto
                                                    </label>
                                                    <input type="judul" name="judul" id="judul"
                                                        class="bg-gray-50 border border-green-600 hover:border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="" required/>
                                                </div>

                                                <div class="flex items-center justify-center w-full">
                                                    <label for="dropzone-file"
                                                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg class="w-8 h-8 mb-4 text-gray-500 "
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p class="mb-2 text-sm text-gray-500 "><span
                                                                    class="font-semibold">Click to upload</span> or drag and
                                                                drop</p>
                                                            <p class="text-xs text-gray-500 ">SVG, PNG,
                                                                JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" type="file" class="hidden" />
                                                    </label>
                                                </div>


                                            </form>
                                        </div>


                                        <div class="flex items-center justify-center">
                                            <button
                                                class="flex items-center bg-red-500 text-white hover:text-white border border-red-700 hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Batal
                                            </button>
                                            <button data-modal-target="popupedit-modal" data-modal-toggle="popupedit-modal"
                                                class="flex items-center bg-green-500 text-white hover:text-white border border-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                                type="button">
                                                Tambah
                                            </button>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                            <div id="popupedit-modal" tabindex="-1"
                                class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative w-full max-w-md max-h-full">
                                    <div class="relative bg-white rounded-lg shadow ">
                                        <button type="button"
                                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                            data-modal-hide="popupedit-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                        <div class="flex flex-col items-center p-6 text-center">
                                            <h1 class="mb-5 text-3xl font-normal text-gray-900 ">
                                                Foto Berhasil Diubah!
                                            </h1>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-12 h-12 text-green-500 fill-green ">
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
                            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow ">
                                    <button type="button"
                                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                        data-modal-hide="delete-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-6 text-center">
                                        <svg class="mx-auto mb-4 text-red-500 w-12 h-12 "
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <h3 class="mb-5 text-lg font-normal text-gray-900">
                                            Apakah anda yakin ingin menghapus Foto?</h3>
                                        <button data-modal-hide="delete-modal" type="button"
                                            class="text-white bg-red-500 border-red-500 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Tidak
                                        </button>
                                        <button data-modal-hide="delete-modal" type="button"
                                            class="text-white bg-green-500 border-green-500 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
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

export default Galeri