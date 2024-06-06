import React from 'react'
import { Link } from 'react-router-dom'

const KarirContent = () => {

    const careers = [
        {
            id : 1,
            posisi : 'Frontend Dev',
            lokasi : 'Jakarta',
            deskripsi : 'Min pengalaman 2 tahun'
        },
        {
            id : 2,
            posisi : 'Backend Dev',
            lokasi : 'Jakarta',
            deskripsi : 'Min pengalaman 2 tahun'
        },
        {
            id : 3,
            posisi : 'Frontend Dev',
            lokasi : 'Semarang',
            deskripsi : 'Min pengalaman 2 tahun'
        },
        {
            id : 4,
            posisi : 'Backend Dev',
            lokasi : 'Jogjakarta',
            deskripsi : 'Min pengalaman 2 tahun'
        },
        {
            id : 5,
            posisi : 'Frontend Dev',
            lokasi : 'Surabaya',
            deskripsi : 'Min pengalaman 2 tahun'
        },
        {
            id : 6,
            posisi : 'Backend Dev',
            lokasi : 'Bandung',
            deskripsi : 'Min pengalaman 2 tahun'
        },

    ]

  return (
    <div className="py-16">
        <div className="max-w-screen-xl mx-auto px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {careers.map((career) => {
                    return (
                    <Link to="/karir/detail_karir" className="block" key={career.id}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{career.posisi}</h3>
                            <p className="text-gray-600 mb-2">Lokasi: {career.lokasi}</p>
                            <p className="text-gray-600">Deskripsi: {career.deskripsi}</p>
                            </div>
                        </div>
                    </Link>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default KarirContent