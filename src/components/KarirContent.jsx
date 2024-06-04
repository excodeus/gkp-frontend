import React from 'react'
import { Link } from 'react-router-dom'

const KarirContent = () => {
  return (
    <div className="py-16">
        <div class="max-w-screen-xl mx-auto px-12">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* <!-- Card 1 --> */}
                <Link to="/karir/detail_karir" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: Frontend Developer</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Jakarta</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </Link>
                {/* <!-- Card 2 --> */}
                <a href="detail_karir.html" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: Backend Developer</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Surabaya</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </a>
                {/* <!-- Card 3 --> */}
                <a href="detail_karir.html" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: UI/UX Designer</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Bandung</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </a>
                {/* <!-- Card 4 --> */}
                <a href="detail_karir.html" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: Data Analyst</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Yogyakarta</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </a>
                {/* <!-- Card 5 --> */}
                <a href="detail_karir.html" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: Marketing Manager</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Bali</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </a>
                {/* <!-- Card 6 --> */}
                <a href="detail_karir.html" class="block">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Posisi: Human Resources Specialist</h3>
                        <p class="text-gray-600 mb-2">Lokasi: Medan</p>
                        <p class="text-gray-600">Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default KarirContent