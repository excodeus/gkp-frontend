import React from 'react'
import { Link } from 'react-router-dom'

const Kategori = () => {
    return (
        <section className="py-16">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid gap-8">
                    
                    {/* <!-- Kategori 1 --> */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-2xl font-bold mb-4">Kategori</h3>
                        {/* <hr className='mb-4 border-t-2 border-green-700'/> */}
                        <div className="carousel-container">
                            <div className="carousel">
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 1" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 2" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 3" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 4" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 5" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Produk 6" className="rounded-lg w-[250px] h-[250px] object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <Link to="/produk_kategori/produk" className="text-gkpgreen font-semibold hover:underline">Lihat Semua Produk</Link>
                        </div>
                    </div>
                    

                </div>

            </div>
        </section>
    )
}

export default Kategori