import React from 'react';

const timelineData = [
  { image: '/dec21.png', position: '140px', xPosition: '650px', label: 'Event 1', date: '2024.12.21', topic:'Grand Finals' },
  { image: '/dec7.png', position: '170px', xPosition: '300px', label: 'Event 2', date: '2024.12.07',  topic:'1st Quiz' },
  { image: '/dec1.png', position: '310px', xPosition: '870px', label: 'Event 3', date: '2024.12.01',  topic:'Awareness Session' },
  { image: '/nov21.png', position: '500px', xPosition: '520px', label: 'Event 4', date: '2024.11.21', topic:'Registration Close'},
  { image: '/nov15.png', position: '600px', xPosition: '150px', label: 'Event 5', date: '2024.11.15', topic:'Registration Open' },
];

const Timeline = () => {
  return (
    <>
      <div style={{ backgroundColor: '#002200' }} className="sm: hidden lg:flex items-center justify-center h-[1000px] flex flex-col items-center py-10">
        <h1 className="relative text-[#A6FD99] text-2xl mt-[300px] mb-[-150px]">TIMELINE</h1><br/><br/>

        <div className="relative justify-between w-full h-96w-full max-w-5xl flex flex-col items-center">
          {/* Curved Path Image */}
          <img
            src="/timelinepath.png" // Path image that shows the curved timeline
            alt="Timeline Path"
            className="object-contain w-[900px] h-[1200px] mt-[80px] ml-[-100px]" // Adjust height of the path image as needed
          />

          {/* Position the event images along the path */}
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="absolute text-center"
              style={{
                top: event.position, // Set the vertical position based on the data
                left: event.xPosition, // Alternate positions for left and right alignment
                transform: 'translate(-50%, -50%)', // Center event both horizontally and vertically
              }}
            >
              <div className="relative flex flex-col items-center mt-[300px]">
                <img
                  src={event.image}
                  alt={event.label}
                  className="object-contain w-[120px] h-[320px] mb-2" // Keep image size intact
                />
                {/* <p className="text-white text-sm font-semibold">{event.date}</p>
                <p className="text-white text-xs">{event.label}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Specific Layout */}
      <div style={{ backgroundColor: '#002200' }} className="sm:min-h-[80vh] text-white flex flex-col items-center px-4 py-8 lg:hidden ">
        <h1 className="text-[#A6FD99] text-2xl mb-[-20px]">TIMELINE</h1><br/><br/>
        

        {timelineData.slice().reverse().map((event, index) => (
          <>
          <div class='relative w-6 h-6 mb-5 mt-6 bg-[#70f85e] rounded-full'>
            <div class='absolute w-6 h-6 bg-[#70f85e] rounded-full animate-ping mb-[-S100px]'></div>
          </div>
          <div key={index} className="sm:w-[300px] isolate bg-white/20 shadow-lg ring-1 ring-black/5 p-6 text-center text-white rounded-lg from-slate-950 to-violet-900 mb-2" >
            <p className="font-bold text-md">{event.date}</p>
            <p className="font-bold text-white text-xl">
                {event.topic === '1st Quiz' ? (
                  <>
                    1<sup>st</sup> Quiz
                  </>
                ) : (
                  event.topic
                )}
              </p>
          </div>
          {index < timelineData.length - 1 && (
            <div className="w-1 h-12 mt-2 bg-[#70f85e]"></div>
          )}
          </>
        ))}
      </div>
    </>
  );
};

export default Timeline;