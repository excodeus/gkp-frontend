import React from "react";
import { Link } from "react-router-dom";

const ArtikelContent = () => {
  return (
    <>
      <style>
        {`
          .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <body className="bg-white">
        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4 gap-12">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* <!-- Card 1 --> */}
              <a
                href="#"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Service 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 1
                    </h3>
                  </div>
                </div>
              </a>

              {/* <!-- Card 2 --> */}
              <a
                href="detail_karir2.html"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Article 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 2
                    </h3>
                  </div>
                </div>
              </a>

              {/* <!-- Card 3 --> */}
              <a
                href="detail_karir3.html"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Article 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 3
                    </h3>
                  </div>
                </div>
              </a>

              {/* <!-- Card 4 --> */}
              <a
                href="detail_karir4.html"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Article 4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 4
                    </h3>
                  </div>
                </div>
              </a>

              {/* <!-- Card 5 --> */}
              <a
                href="detail_karir5.html"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Article 5"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 5
                    </h3>
                  </div>
                </div>
              </a>

              {/* <!-- Card 6 --> */}
              <a
                href="detail_karir6.html"
                className="bg-white rounded-lg overflow-hidden shadow-lg card"
              >
                <div className="relative w-full h-58">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Article 6"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="font-semibold text-lg text-white">
                      Article 6
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- Pagination --> */}
      <nav aria-label="Page navigation example" class="mt-8">
        <ul class="flex items-center -space-x-px h-8 text-sm justify-center">
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray            -700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">6</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">7</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">8</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">9</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
      </body>
    </>
  );
};

export default ArtikelContent;
