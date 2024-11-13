import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setFade(true);
  }, []);

  return (
    <section
    className="relative h-[40vh] bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 md:px-12 ${fade ? 'animate-fadeIn' : ''}`}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Empowering the Future of Students
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        We provide financial support and guidance to help students achieve their
        dreams and shape a brighter future.
      </p>
      <a
        href="/About"
        className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-xl transition duration-300"
      >
        Learn More
      </a>
    </div>
  </section>
  
  );
};

export default HeroSection;
