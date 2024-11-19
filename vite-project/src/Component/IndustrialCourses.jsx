import React from "react";

const CourseCertificationPage = () => {
  const courses = [
    {
      title: "Interview Preparation Course",
      description:
        "Master interview skills in less than a month and earn a certificate to boost your career.",
    },
    {
      title: "Certification in HR",
      description:
        "Learn HR essentials and practices to become an effective HR professional in 30 days.",
    },
    {
      title: "Certification in Sales Management",
      description:
        "Enhance your sales skills and leadership abilities in just a month with our certification.",
    },
    {
      title: "Certification in Digital Marketing",
      description:
        "Unlock the secrets of successful digital campaigns and strategies within 30 days.",
    },
    {
      title: "Business Communication",
      description:
        "Improve your communication skills to excel in the corporate world in under a month.",
    },
    {
      title: "Financial Marketing",
      description:
        "Gain insights into financial strategies and markets, and earn your certificate in 30 days.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 animate-bounce">Online Industrial Course Certification</h1>
        <p className="text-lg mt-4 text-gray-700">
          Enroll in less than a month and earn certifications to advance your career!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-200">
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Industrial Course Certification. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CourseCertificationPage;
