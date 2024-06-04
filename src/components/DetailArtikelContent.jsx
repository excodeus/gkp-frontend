import React from 'react'

const DetailArtikelContent = () => {
  return (
    <div class="max-w-screen-lg mx-auto p-4 bg-white mt-8 rounded-lg shadow-md mb-14">
        {/* <!-- Judul Artikel --> */}
        <h1 class="text-3xl font-bold mb-4">Judul Artikel</h1>
        
        {/* <!-- Info Artikel --> */}
        <div class="text-gray-600 mb-6">
            <span>Published on: <span class="font-semibold">22 May 2024</span></span> | 
            <span> By: <span class="font-semibold">Nama Penulis</span></span>
        </div>

        {/* <!-- Gambar Artikel --> */}
        <div class="mb-6">
            <img src="https://via.placeholder.com/800x400" alt="Gambar Artikel" class="w-full h-auto rounded-lg"/>
        </div>

        {/* <!-- Deskripsi Artikel --> */}
        <div class="text-gray-800 leading-relaxed">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec mattis eros at sapien gravida, non consequat libero efficitur. Fusce efficitur at quam vitae malesuada. Curabitur imperdiet arcu nisi, nec hendrerit nibh ullamcorper non. Mauris euismod erat ac augue volutpat, ut malesuada nunc ultricies. Nullam vitae erat lorem. Cras ultricies metus ac velit malesuada, vel tincidunt nunc aliquet.</p>
            <p class="mb-4">Duis nec lobortis massa. Vivamus et dui ac ligula bibendum tincidunt. Phasellus commodo lacinia nulla, nec viverra nisi tincidunt at. Integer vel ultricies lacus. In nec vestibulum erat. Suspendisse sed suscipit nisi, a lacinia nisl. Vivamus mattis tincidunt orci vel laoreet.</p>
            <p class="mb-4">Vestibulum ac ligula felis. Etiam vehicula odio eget urna ullamcorper, a varius purus fringilla. Ut pretium convallis sem, at faucibus eros. Suspendisse potenti. Nunc vel eros at erat tristique varius. Phasellus nec metus scelerisque, vehicula eros nec, malesuada libero.</p>
        </div>
    </div>
  )
}

export default DetailArtikelContent