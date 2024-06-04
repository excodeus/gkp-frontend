// import React from 'react'

// const GaleriContent = () => {
//   return (
//     <>
//         <div className='mx-auto px-20 mt-8 mb-14'>
//             <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
//                 </div>
//                 <div>
//                     <img class="h-auto max-w-full rounded-lg hover-effect" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
//                 </div>
//             </div>
//         </div>

//         <div id="overlay" class="overlay"></div>
//     </>
//   )
// }

// export default GaleriContent

import React, { useState } from 'react';

const images = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
];

const GaleriContent = () => {
  const [enlargedSrc, setEnlargedSrc] = useState(null);

  const handleImageClick = (src) => {
    setEnlargedSrc(src);
  };

  const handleOverlayClick = () => {
    setEnlargedSrc(null);
  };

  return (
    <div className='mx-auto px-20 mt-8 mb-14'>
        <div className="bg-white p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                <div key={index}>
                    <img
                    className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300"
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => handleImageClick(src)}
                    />
                </div>
                ))}
            </div>

            {enlargedSrc && (
                <>
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-999"
                    onClick={handleOverlayClick}
                />
                <img
                    src={enlargedSrc}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 max-w-90 max-h-90 shadow-lg transition-transform duration-300"
                    alt="Enlarged"
                />
                </>
            )}
        </div>
    </div>
  );
};

export default GaleriContent;
