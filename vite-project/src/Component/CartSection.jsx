import React, { useState, useEffect } from 'react';

const CartComponent = () => {
  const services = [
    { id: 1, name: 'Student Scholarship', description: 'Financial support for education', image: 'https://images.pexels.com/photos/29377237/pexels-photo-29377237/free-photo-of-young-woman-writing-in-a-cafe-with-coffee.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Job Placement Assistance', description: 'Helping job seekers find the right job', image: 'https://images.pexels.com/photos/8942699/pexels-photo-8942699.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Career Counseling', description: 'Guidance for students and job seekers', image: 'https://images.pexels.com/photos/8413391/pexels-photo-8413391.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Internship Opportunities', description: 'Providing students with internship placements', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Financial Aid for Exams', description: 'Helping students with exam fees', image: 'https://images.pexels.com/photos/7092543/pexels-photo-7092543.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Financial Aid for Exams', description: 'Helping students with exam fees', image: 'https://images.pexels.com/photos/6231765/pexels-photo-6231765.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const feedbacks = [
    {
      id: 1,
      name: 'Divya',
      text: 'This service helped me get a scholarship and continue my studies without financial stress.',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYstgrAU6wVDSUphXpEN8EvoUvEUG-SFip4Q&s',
    },
    {
      id: 2,
      name: 'Karan',
      text: 'The job placement assistance I received was fantastic! I got hired within weeks.',
      avatar: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'Abdul',
      text: 'Career counseling helped me find my passion and the right career path.',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1PA-cCo5I13c1ZtUoCmnYue7zbbdh6MOKg&s',
    },
  ];

  // State for feedback rotation
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const feedbackInterval = setInterval(() => {
      setCurrentFeedback((prevFeedback) => (prevFeedback + 1) % feedbacks.length);
    }, 4000); // Change feedback every 4 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(feedbackInterval);
  }, []);

  return (
    <div className="container mx-auto p-6">

         {/* Feedback Section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Student Feedback</h2>
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <img
            src={feedbacks[currentFeedback].avatar}
            alt={feedbacks[currentFeedback].name}
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <h3 className="font-semibold">{feedbacks[currentFeedback].name}</h3>
            <p className="text-gray-600">{feedbacks[currentFeedback].text}</p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-lg text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default CartComponent;
