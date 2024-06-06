import React from 'react'

const DetailProdukContent = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-8 mb-14">
        {/* <!-- Single Product --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                <img className="h-auto w-full object-cover hover-effect rounded"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Product Image"/>
            </div>
            <div className="p-10 flex flex-col justify-start">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Title <hr /></h2>
                <p className="text-gray-700">This is a brief description of the product. It provides context and details
                    about the product features and specifications.</p>
            </div>
        </div>
    </div>
  )
}

export default DetailProdukContent