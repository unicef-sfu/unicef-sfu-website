import { useEffect, useState } from "react";

export const Home = () => {
  const stats = [
    { number: "500+", label: "Club Members" },
    { number: "15+", label: "Fundraisers Held" },
    { number: "$3,000+", label: "Raised for Charity" },
    { number: "60+", label: "Advocacy Campaigns" },
  ]
  
  const galleryItems = [
    {
      id: "gallery-0",
      title: "Button Station",
      img: "/event-gallery/button-station.jpeg",
    },
    {
      id: "gallery-1",
      title: "Photo Room",
      img: "/event-gallery/photo-room.jpeg",
    },
    {
      id: "gallery-2",
      title: "Presentation",
      img: "/event-gallery/presentation.jpeg",
    },
    {
      id: "gallery-3",
      title: "Work Simulation",
      img: "/event-gallery/work-simulation.jpeg",
    },
    {
      id: "gallery-4",
      title: "Fall 2025 Icebreaker",
      img: "/past-events/icebreaker-fall-2025.jpg"
    },
    {
      id: "gallery-5",
      title: "Krispy Kreme Fundraiser",
      img: "/past-events/krispy-kreme-fundraiser.PNG"
    },
    {
      id: "gallery-6", 
      title: "bright-futures-gala.png",
      img: "/past-events/bright-futures-gala.png"
    }
  ]

  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const nextSlide = () => {
    setCurrent((prev) => prev >= galleryItems.length - visibleCount ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev <= 0 ? galleryItems.length - visibleCount : prev - 1);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3); // Desktop
      }
  };

  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);

  return () => window.removeEventListener("resize", updateVisibleCount);
}, []);


  return (
    <div>
      {/* Banner */}
      <div className="relative w-full aspect-[22/10] overflow-hidden">
        <img
          src="/club_banner.png"
          alt="UNICEF image"
          className="w-full h-full object-cover object-[100%_100%]"
        />
        <div className="absolute bottom-8 left-15 text-white">
          <p
            className="text-4xl font-semibold"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            For every child, <span className="text-[#65D5FF]">hope</span>
          </p>
        </div>
      </div>

      {/* Who we are section */}
      <div className="w-full text-[#585962] flex flex-col items-center justify-center px-8 md:px-10 pt-16 pb-9 gap-8 text-center">
        <h2 className="font-bold text-4xl text-black">Who We Are</h2>
        <p className="w-full md:w-2/3 lg:w-1/2 px-4 text-black text-lg text-justify mb-5">
          We are Simon Fraser University's student-led Campus Club directly
          affiliated with UNICEF Canada. We hold events that fundraise, raise
          awareness and advocate on behalf of children around the world. 100% of
          proceeds raised each academic year are donated to UNICEF Canada.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-6xl my-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg"
            >
              <div className="text-4xl font-bold text-[#1CABE2] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-[#1CABE2] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Gallery */}
      <div className="w-full bg-[#EEEEEE] py-16 flex flex-col items-center">

        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-[#1CABE2] mb-3">
            Event Gallery
          </h2>
          <p className="text-sm text-black/70 text-center mb-10">
            Browse through our image gallery of previous events and fundraisers!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-3/4 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{transform: `translateX(-${current * (100 / visibleCount)}%)`,}}>
              {galleryItems.map((item, index) => (
                <div className="flex-shrink-0 p-2 w-full sm:w-1/2 lg:w-1/3" key={item.id}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-contain rounded-lg cursor-zoom-in"
                    >
                  </img>
                </div>
              ))}
          </div>

          {/* arrows to navigate prev and next images */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
          >
            ›
          </button>
        </div>

      </div>
    </div>
  )
}
