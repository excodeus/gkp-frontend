import React from "react";
import Logo from "../assets/logo.png";
import image from '../assets/jumbotron.JPG'

const Profile = () => {
  return (
    <>

      {/* Profile Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Founder Photo and Info --> */}
            <div className="flex flex-col items-center md:items-start bg-gkpgreen w-80 p-8 rounded-3xl shadow-md ml-20">
              <img
                src="https://via.placeholder.com/300"
                alt="Founder Photo"
                className="w-64 h-64 object-cover rounded-full mb-4"
              />
              <h3 className="text-gkpgreen text-2xl font-semibold">Nama Pendiri</h3>
              <p className="text-gkpgreen text-gray-600">Jabatan Pendiri</p>
            </div>
            {/* <!-- Description --> */}
            <div className="mr-18 text-justify">
              <p className="text-gray-700 text-xl font-medium pt-14 leading-10">
                PT Glory Katri Putera was established in 2000 by Nama Pendiri, a
                visionary dedicated to providing high quality additives in
                Indonesia. We continue to grow and become one of the major
                suppliers of raw materials with a commitment to provide
                technical services that assist customers in applying our
                materials to their products. We believe in the value of customer
                trust and strive to maintain it by providing quality products
                and friendly service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
          {/* <!-- Timeline --> */}
          <ol className="relative w-[60%]">

            <li className="mb-10 relative text-center">
              <h3 className="text-2xl font-semibold text-white w-[60%]">
                Established on May 2000 as Glochem Katri Putera
              </h3>
              <div className=" w-1 h-14 bg-gray-200 -start-1.5 border border-white mx-[29.75%] mt-6"></div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white mx-[30%]"></div>
            </li>

            <li className="mb-10 relative text-center">
              <h3 className="text-2xl font-semibold text-white w-[60%]">
                Became the first sole agent of Ajinomoto aspartame and amino acid on 2000
              </h3>
              <div className=" w-1 h-14 bg-gray-200 -start-1.5 border border-white mx-[29.75%] mt-6"></div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white mx-[30%]"></div>
            </li>

            <li className="mb-10 relative text-center">
              <h3 className="text-2xl font-semibold text-white w-[60%]">
                June 2008 Glochem Katri Putra changed to Glory Katri Putera
              </h3>
              <div className=" w-1 h-14 bg-gray-200 -start-1.5 border border-white mx-[29.75%] mt-6"></div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white mx-[30%]"></div>
            </li>

            <li className="relative text-center">
              <h3 className="text-2xl font-semibold text-white w-[60%]">
                Expand our business to cosmetics and veterinary industries on 2013
              </h3>
            </li>
          </ol>

          {/* <!-- Fotos --> */}
          <div className="flex flex-col gap-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/480x200"
                alt="Foto 1"
                className="rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/480x200"
                alt="Foto 2"
                className="rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/480x200"
                alt="Foto 3"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Visi Misi Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          {/* <!-- Logo Perusahaan --> */}
          <div className="md:order-2 max-h-full">
            <img src={Logo} alt="Logo Perusahaan" className="w-80 border-8 border-green-800 rounded-2xl" />
          </div>

          {/* <!-- Visi dan Misi --> */}
          <div className="md:order-1 w-[80%]">
            <h2 className="text-gkpgreen text-5xl font-bold mb-6">Visi</h2>
            <p className="text-2xl text-gray-700 mb-16">
              Become a trusted company in terms of quality and service.
            </p>
            <h2 className="text-gkpgreen text-5xl font-bold mb-6">Misi</h2>
            <p className="text-2xl text-gray-700">
              Through customer trust,  GKP sells high quality and safe products.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section className="py-20 bg-center bg-no-repeat bg-[bg-gray-500] bg-gray-600 bg-blend-multiply h-[600px] relative top-28"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-center ">

          {/* <!-- Alamat Headquarters --> */}
          <div className="order-1 text-white w-80">
            <h2 className="text-3xl font-bold mb-8">Headquarters</h2>
            <p className="text-md mb-4">
              Ruko Buaran Persada No.19, Jl. RS Soekamto, Duren Sawit, Jakarta Timur 13450
            </p>
            <p className="text-md mb-4">
              (021) 8660 1788
            </p>
            <p className="text-md">
              glorysales@cbn.net.id
              agus.purwantoro@glorykatriputera.co.id
              yuanita.gustanti@glorykatriputera.co.id
              ridwan.azhar@glorykatriputera.co.id
              selvin.dhealarasati@glorykatriputera.co.id
              derian.faridsa@glorykatriputera.co.id
            </p>
          </div>

          {/* <!-- Garis pemisah --> */}
          <div className="order-2 h-[320px] w-0.5 mx-[200px] bg-white "></div>

          {/* <!-- Branch Site --> */}
          <div className="order-3 text-white w-80">
            <h2 className="text-3xl font-bold mb-8">Branch Site</h2>
            <p className="text-md mb-4">
            Komplek Kawasan Industri Candi, Jalan Gatot Subroto Blok XVI No.9D, Semarang, Jawa Tengah
            </p>
            <p className="text-md mb-4">
              (021) 7619 329
            </p>
            <p className="text-md mb-24">
              glory_smg@cbn.net.id
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
