import React from 'react'
import Chart from './Chart'

const Dashboard = () => {
  return (
    <div className=" sm:ml-64 bg-gray-100">
        {/* <!-- Header --> */}
        <header className="bg-white px-10 py-4 text-gray-800">
            <div className="container mx-auto flex flex-col items-start">
                <h1 className="text-2xl text-gkpgreen font-semibold">SELAMAT DATANG!</h1>
                <h2 className="text-xl ">Mr. Lorem Ipsum</h2>
                <hr className="border-t-4 border-gkpgreen w-full mt-2"/>
            </div>
        </header>

        {/* <!-- Main Content --> */}
        <main className="container mx-auto p-10">
            {/* <!-- Highlight Produk --> */}
            <section>
                <h2 className="text-2xl text-gkpgreen font-semibold mb-4">Highlight Produk</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* <!-- Card Produk --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Produk 1"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Produk 1</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 1</h4>
                        <p className="text-gray-700">Deskripsi singkat produk 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Produk 2"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Produk 2</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 2</h4>
                        <p className="text-gray-700">Deskripsi singkat produk 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Produk 3"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Produk 3</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 3</h4>
                        <p className="text-gray-700">Deskripsi singkat produk 3.</p>
                    </div>
                </div>
            </section>

            {/* <!-- Highlight Karir --> */}
            <section className="mt-8">
                <h2 className="text-2xl text-gkpgreen font-semibold mb-4">Highlight Karir</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* <!-- Card Karir --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Posisi 1"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Posisi 1</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 1</h4>
                        <p className="text-gray-700">Deskripsi singkat posisi karir 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Posisi 2"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Posisi 2</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 2</h4>
                        <p className="text-gray-700">Deskripsi singkat posisi karir 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Posisi 3"
                            className="w-full h-32 object-cover rounded-md mb-4"/>
                        <h3 className="text-xl font-bold mb-1">Posisi 3</h3>
                        <h4 className="text-md font-semibold text-gray-600 mb-2">Sub Judul 3</h4>
                        <p className="text-gray-700">Deskripsi singkat posisi karir 3.</p>
                    </div>
                </div>
            </section>

            {/* Chart */}
            <section className="mt-8">
                <Chart />
            </section>
        </main>
    </div>
  )
}

export default Dashboard