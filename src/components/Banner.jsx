import React from 'react'
import { useLocation } from 'react-router-dom'
import image from '../assets/bgbanner.jpg'

const Banner = () => {

  const location = useLocation();
  const getPageTitle = (path) => {
    switch (path) {
      case '/karir':
      case '/karir/detail_karir':
        return 'CAREER';
      case '/produk_kategori':
      case '/produk_kategori/produk':
      case '/produk_kategori/produk/detail_produk':
        return 'PRODUCT';
      case '/galeri':
        return 'GALLERY';
      case '/artikel':
      case '/artikel/detail_artikel':
        return 'ARTICLE';
      case '/terbaru':
        return "WHAT'S NEW?";
      case '/tentang':
        return 'ABOUT US';
      default:
        return 'GKP';
    }
  }

  return (
    <div className="text-gkpgreen py-16 px-4 bg-cover bg-center bg-gray-600 bg-blend-multiply"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
      }}
    >
        {/* style="background-image: url('asset/Instagram1.JPG');" */}
        
        <div className="max-w-screen-xl mx-auto flex items-center">
            {/* <!-- Judul Karir --> */}
            <h2 className="text-white text-4xl font-bold">{getPageTitle(location.pathname)}</h2>
            {/* <!-- Isi lainnya bisa ditambahkan di sini --> */}
        </div>
    </div>
  )
}

export default Banner