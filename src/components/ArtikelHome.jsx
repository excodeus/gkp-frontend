import React from 'react'

const ArtikelHome = () => {
  return (
    <div className="py-20 mx-10">
        <div className="text-center py-16">
            <h2 className="text-gkpgreen text-3xl font-bold mb-8">ARTICLE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* <!-- Card 1 --> */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 1" className="w-full h-48 object-cover object-center"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Judul Artikel 1</h3>
                        <p className="text-gray-600">Deskripsi singkat artikel 1.</p>
                    </div>
                </div>
                
                {/* <!-- Card 2 --> */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 2" className="w-full h-48 object-cover object-center"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Judul Artikel 2</h3>
                        <p className="text-gray-600">Deskripsi singkat artikel 2.</p>
                    </div>
                </div>
                
                {/* <!-- Card 3 --> */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 3" className="w-full h-48 object-cover object-center"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">Judul Artikel 3</h3>
                        <p className="text-gray-600">Deskripsi singkat artikel 3.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArtikelHome