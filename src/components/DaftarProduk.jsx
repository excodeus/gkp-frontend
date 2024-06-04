import React from 'react'
import { Link } from 'react-router-dom'

const DaftarProduk = () => {
  return (
    <section class="py-16">
            <div class="max-w-screen-xl mx-auto px-4">
                {/* <h2 class="text-3xl font-bold mb-8 text-center">Daftar Produk</h2> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* <!-- Product Card 1 --> */}
                    <Link to="/produk_kategori/produk/detail_produk" class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 1" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 1</div>
                    </Link>
                    {/* <!-- Product Card 2 --> */}
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 2" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 2</div>
                    </div>
                    {/* <!-- Product Card 3 --> */}
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 3" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 3</div>
                    </div>
                    {/* <!-- Product Card 4 --> */}
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 4" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 4</div>
                    </div>
                    {/* <!-- Product Card 5 --> */}
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 5" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 5</div>
                    </div>
                    {/* <!-- Product Card 6 --> */}
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 6</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 7</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 8</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 9</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 10</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 11</div>
                    </div>
                    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://via.placeholder.com/300x300" alt="Produk 6" class="w-full h-56 object-cover"/>
                        <div class="product-name">Produk 12</div>
                    </div>
                    {/* <!-- Add more product cards as needed --> */}
                </div>
            </div>
    </section>
  )
}

export default DaftarProduk