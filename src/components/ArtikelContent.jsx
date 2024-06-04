import React from 'react'

const ArtikelContent = () => {
  return (
    <div class="py-20 mx-10">
        <div class="text-center py-16">
            <h2 class="text-gkpgreen text-3xl font-bold mb-8">ARTIKEL</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* <!-- Card 1 --> */}
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 1" class="w-full h-48 object-cover object-center"/>
                    <div class="p-6">
                        <h3 class="font-semibold text-lg mb-2">Judul Artikel 1</h3>
                        <p class="text-gray-600">Deskripsi singkat artikel 1.</p>
                    </div>
                </div>
                
                {/* <!-- Card 2 --> */}
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 2" class="w-full h-48 object-cover object-center"/>
                    <div class="p-6">
                        <h3 class="font-semibold text-lg mb-2">Judul Artikel 2</h3>
                        <p class="text-gray-600">Deskripsi singkat artikel 2.</p>
                    </div>
                </div>
                
                {/* <!-- Card 3 --> */}
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/400x300" alt="Article 3" class="w-full h-48 object-cover object-center"/>
                    <div class="p-6">
                        <h3 class="font-semibold text-lg mb-2">Judul Artikel 3</h3>
                        <p class="text-gray-600">Deskripsi singkat artikel 3.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArtikelContent