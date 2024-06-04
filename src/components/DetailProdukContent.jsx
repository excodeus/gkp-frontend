import React from 'react'

const DetailProdukContent = () => {
  return (
    <div class="max-w-screen-lg mx-auto p-4 mt-8 mb-14">
        {/* <!-- Single Product --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-4">
                <img class="h-auto w-full object-cover hover-effect rounded"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Product Image"/>
            </div>
            <div class="p-6 flex flex-col justify-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Title</h2>
                <p class="text-gray-700">This is a brief description of the product. It provides context and details
                    about the product features and specifications.</p>
            </div>
        </div>
    </div>
  )
}

export default DetailProdukContent