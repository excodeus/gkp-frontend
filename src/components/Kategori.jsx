import React from 'react'
import { Link } from 'react-router-dom'

const Kategori = () => {
    return (
        <section class="py-16">
            <div class="max-w-screen-xl mx-auto px-4">
                <div class="grid  gap-8">
                    
                    {/* <!-- Kategori 1 --> */}
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-2xl font-bold mb-4">Kategori</h3>
                        {/* <hr className='mb-4 border-t-2 border-green-700'/> */}
                        <div class="carousel-container">
                            <div class="carousel">
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 1" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 2" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 3" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 4" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 5" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 6" class="rounded-lg"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <Link to="/produk_kategori/produk" class="text-gkpgreen font-semibold hover:underline">Lihat Semua Produk</Link>
                        </div>
                    </div>
                    
                    {/* <!-- Kategori 2 --> */}
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-xl font-bold mb-4">Kategori</h3>
                        <div class="carousel-container">
                            <div class="carousel">
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 1" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 2" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 3" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 4" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 5" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 6" class="rounded-lg"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <a href="list_produk.html" class="text-blue-500 hover:underline">Lihat Semua Produk</a>
                        </div>
                    </div>
                    
                    {/* <!-- Kategori 3 --> */}
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-xl font-bold mb-4">Kategori</h3>
                        <div class="carousel-container">
                            <div class="carousel">
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 1" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 2" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 3" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 4" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 5" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 6" class="rounded-lg"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <a href="list_produk.html" class="text-blue-500 hover:underline">Lihat Semua Produk</a>
                        </div>
                    </div>

                    {/* <!-- Kategori 4 --> */}
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-xl font-bold mb-4">Kategori</h3>
                        <div class="carousel-container">
                            <div class="carousel">
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 1" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 2" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 3" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 4" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 5" class="rounded-lg"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/200" alt="Produk 6" class="rounded-lg"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <a href="list_produk.html" class="text-blue-500 hover:underline">Lihat Semua Produk</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Kategori