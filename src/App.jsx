import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Karir from './pages/Karir.jsx'
import DetailKarir from './pages/DetailKarir.jsx'
import Artikel from './pages/Artikel.jsx'
import DetailArtikel from './pages/DetailArtikel.jsx'
import ProdukKategori from './pages/ProdukKategori.jsx'
import Produk from './pages/Produk.jsx'
import Tentang from './pages/Tentang.jsx'
import Terbaru from './pages/Terbaru.jsx'
import Galeri from './pages/Galeri.jsx'
import DetailProduk from './pages/DetailProduk.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route>
          <Route index element={<Home />}/>
          <Route path="karir" element={<Karir />}/>
          <Route path="karir/detail_karir" element={<DetailKarir />}/>
          <Route path="artikel" element={<Artikel />}/>
          <Route path="artikel/detail_artikel" element={<DetailArtikel />}/>
          <Route path="produk_kategori" element={<ProdukKategori />}/>
          <Route path="produk_kategori/produk" element={<Produk />}/>
          <Route path="produk_kategori/produk/detail_produk" element={<DetailProduk />}/>
          <Route path="tentang" element={<Tentang />}/>
          <Route path="terbaru" element={<Terbaru />}/>
          <Route path="galeri" element={<Galeri />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);