import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Carousel images
import image1 from '../assets/bgagent.jpg';
import image2 from '../assets/bgbanner.jpg';
import image3 from '../assets/jumbotron.JPG';

const Jumbotron = () => {
  return (
    <div className="relative h-66">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        
      >
        <div className="">
          <img src={image1} className=" object-cover" alt="Slide 1" />
          <div className="absolute inset-0 bg-black opacity-50"></div>

        </div>
        <div className="">
          <img src={image2} className=" object-cover" alt="Slide 2" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="">
          <img src={image3} className=" object-cover" alt="Slide 3" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl pb-4">
          We Value Your Trust
        </h1>
        <p className="mb-8 text-base font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48">
          Established in 2000, PT Glory Katri Putera continues to grow in supplying raw material additives in
          Indonesia. We provide a wide range of high-quality products to meet our customer's needs. To maintain our
          customer's trust, we provide technical services to help customers apply our materials to their products.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mt-4">
          <Link to="/produk_kategori"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-button hover:bg-green-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
          <Link to="/tentang"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
