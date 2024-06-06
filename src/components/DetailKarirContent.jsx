import React from 'react'

const DetailKarirContent = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Nama Lowongan: Frontend Developer</h1>
            <h2 className="text-xl font-semibold mb-8">Posisi: Jakarta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* <!-- Informasi Kontak --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Informasi Kontak</h3>
                    <p className="text-gray-600 mb-1">Nama Kontak: John Doe</p>
                    <p className="text-gray-600 mb-1">Email: john.doe@example.com</p>
                    <p className="text-gray-600 mb-1">Telepon: 123-456-7890</p>
                </div>

                {/* <!-- Deskripsi Pekerjaan --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Deskripsi Pekerjaan</h3>
                    <p className="text-gray-600 mb-4">
                        Kami mencari Frontend Developer yang berpengalaman untuk bergabung dengan tim kami. Tanggung jawab Anda
                        meliputi mengembangkan dan memelihara antarmuka pengguna yang responsif dan efisien menggunakan teknologi
                        web modern.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Kualifikasi:
                        <ul className="list-disc list-inside">
                            <li>Pengalaman minimal 3 tahun dalam pengembangan frontend</li>
                            <li>Memahami HTML, CSS, dan JavaScript</li>
                            <li>Pengalaman dengan framework frontend seperti React atau Vue.js</li>
                        </ul>
                    </p>
                    <p className="text-gray-600 mb-4">
                        Tanggung jawab:
                        <ul className="list-disc list-inside">
                            <li>Mengembangkan fitur baru untuk aplikasi web</li>
                            <li>Memelihara kode yang ada dan memperbaiki bug</li>
                            <li>Bekerja sama dengan tim backend untuk mengintegrasikan API</li>
                        </ul>
                    </p>
                    <p className="text-gray-600">
                        Jika Anda tertarik, silakan kirimkan CV dan portofolio Anda ke email di atas.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailKarirContent