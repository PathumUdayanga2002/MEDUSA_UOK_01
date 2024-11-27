import React from 'react';
import Slider from 'react-slick';
import nadula from '../../assets/nadula.png';
import hashx from '../../assets/hashx.png';
import AWS from '../../assets/AWS.png';
import iCET from '../../assets/iCET.png';
import codechef from '../../assets/codechef.png';

const cards = [
  { id: 1, image: iCET, title: 'TITLE PARTNER', link: 'https://www.facebook.com/iCETSriLanka' },
  { id: 2, image: AWS, title: 'KNOWLEDGE PARTNER', link: 'https://www.linkedin.com/company/aws-cloud-club-of-university-of-kelaniya/' },
  { id: 3, image:  nadula, title: 'PHOTOGRAPHY PARTNER', link: 'https://www.facebook.com/share/1CzJ31K29C/?mibextid=LQQJ4d' },
  { id: 4, image: hashx, title: 'OFFICIAL CTF PLATFORM PROVIDER', link: 'https://hashx.live' },
  { id: 5, image: codechef,  title: 'DIGITAL MEDIA PARTNERS', link: 'https://whatsapp.com/channel/0029Vadn4YZHrDZjzJPOxT0T' },
];

const Partners = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Reduce the number of visible slides for better fit
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (<>
    <style>
        {`
          /* Set the color for inactive dots */
          .slick-dots li button:before {
            color: #808080;
          }

          /* Set the color for the active dot */
          .slick-dots li.slick-active button:before {
            color: #4ade80;
          }
        `}
    </style>
    <div className="bg-gray-950 py-10" id="partners">
      <h2 className="relative mt-8 mb-12 text-2xl font-bold font-techno text-center md:text-3xl" style={{ color: 'rgba(166, 253, 153, 1)' }}>
        OUR PARTNERS
      </h2>
      <div id="Achievements" className="p-2 flex justify-center items-center w-full mx-auto">
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            {cards.map((card) => (
            <div key={card.id} className="p-4">
            <div className="shadow-md rounded-lg p-2 flex flex-col items-center bg-gray-800 w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
              {/* Image Wrapper */}
              <div className="bg-white rounded-lg w-full h-40 flex items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
          
              {/* Title */}
              <h2 className="text-lg font-semibold pt-3 text-center text-white">
                {card.title}
              </h2>
          
              {/* Link */}
              <p className="text-green-500 text-sm pt-1 flex items-center">
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  🌐 <span className="ml-1">Visit Site</span>
                </a>
              </p>
            </div>
          </div>
                    
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default Partners;