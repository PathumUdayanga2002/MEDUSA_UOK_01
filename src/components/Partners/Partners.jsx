import React from 'react';
import Slider from 'react-slick';

const cards = [
  { id: 1, image: 'https://via.placeholder.com/150', title: 'TITLE PARTNERS', link: '#dummyLink' },
  { id: 2, image: 'https://via.placeholder.com/150', title: 'PLATINUM PARTNERS', link: '#dummyLink' },
  { id: 3, image: 'https://via.placeholder.com/150', title: 'GOLD PARTNERS', link: '#dummyLink' },
  { id: 4, image: 'https://via.placeholder.com/150', title: 'SILVER PARTNERS', link: '#dummyLink' },
  { id: 5, image: 'https://via.placeholder.com/150', title: 'BRONZE PARTNERS', link: '#dummyLink' },
];

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
      <h2 className="relative mt-8 mb-12 text-2xl font-bold text-center text-green-500 md:text-3xl">
        OUR PARTNERS
      </h2>
      <div id="Achievements" className="p-2 flex justify-center items-center w-full mx-auto">
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="p-4">
                <div className="shadow-md rounded-lg p-2 flex flex-col items-center bg-gray-800 w-full">
                  <div className="bg-white rounded-xl w-full h-48 flex items-center justify-center overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-xl font-bold pt-3 text-center text-white">{card.title}</h2>
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