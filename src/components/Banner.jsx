import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import image from '../assets/bgbanner.jpg'

const Banner = () => {

  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/karir':
        return 'CAREER';
      case '/karir/detail_karir':
        return 'DETAIL';
      case '/produk_kategori':
        return 'PRODUCT CATEGORY';
      case '/produk_kategori/produk':
        return 'PRODUCT';
      case '/produk_kategori/produk/detail_produk':
        return 'DETAIL';
      case '/galeri':
        return 'GALLERY';
      case '/artikel':
        return 'ARTICLE';
      case '/artikel/detail_artikel':
          return 'DETAIL'
      case '/terbaru':
        return "WHAT'S NEW?";
      case '/tentang':
        return 'ABOUT US';
      default:
        return 'GKP';
    }
  }

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    return (
      <div className='text-white text-3xl font-bold'>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          return (
            <span key={to}>
              {index > 0 && ' > '}
              <Link to={to}>{getPageTitle(to)}</Link>
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div className="text-gkpgreen py-24 px-4 bg-cover bg-center bg-gray-600 bg-blend-multiply"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
      }}
    >
        {/* style="background-image: url('asset/Instagram1.JPG');" */}
        
        <div className="max-w-screen-xl mx-auto flex items-center">
            {/* <!-- Judul Karir --> */}
            {generateBreadcrumbs()}
            {/* <!-- Isi lainnya bisa ditambahkan di sini --> */}
        </div>
    </div>
  )
}

export default Banner