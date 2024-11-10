import React from 'react';

const timelineData = [
  { image: '/dec21.png', position: '145px' , xPosition:'650px'},
  { image: '/dec7.png', position: '170px', xPosition:'300px'},
  { image: '/dec1.png', position: '310px' , xPosition:'860px'},
  { image: '/nov21.png', position: '500px', xPosition:'500px'},
  { image: '/nov15.png', position: '600px', xPosition:'150px'},
];

const Timeline = () => {
  return (
    <div style={{ backgroundColor: '#002200' }} className="h-[1000px] flex flex-col items-center py-10">
      <h1 className="text-[#A6FD99] text-2xl mb-8">TIMELINE</h1><br/><br/>

      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Curved Path Image */}
        <img
          src="/timelinepath.png" // Path image that shows the curved timeline
          alt="Timeline Path"
          className="object-contain w-[900px] h-[1200px] mt-[-60px]" // Adjust height of the path image as needed
        />

        {/* Position the event images along the path */}
        {timelineData.map((event, index) => (
          <div
            key={index}
            className="absolute text-center"
            style={{
              top: event.position, // Set the vertical position based on the data
              left: event.xPosition, // Alternate positions for left and right alignment
              transform: 'translate(-0%, -50%)', // Adjust to center event horizontally with better alignment
            }}
          >
            <div className="relative flex flex-col items-center">
              <img
                src={event.image}
                alt={event.label}
                className="w-[120px] h-[320px] mb-2" // Keep image size intact
              />
              <p className="text-white text-sm font-semibold">{event.date}</p>
              <p className="text-white text-xs">{event.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline
