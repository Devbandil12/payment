import React, { useEffect, useState } from 'react';
import Navbar from '../Component/NavBar';
import Footer from '../Footer';


const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    aboutSection: false,
    missionSection: false,
    benefitsSection: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animated-section');

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('fade-in');
        }
      });

      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
          card.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
    <Navbar/>
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
      <header className="bg-gray-900 text-white w-full text-center py-12 shadow-md">
        <div>
          <h1 className="text-3xl mb-2">Karat Karat Abhiyas</h1>
          <p className="text-lg">Empowering government exam aspirants to achieve their dreams</p>
        </div>
      </header>

      <div className="flex flex-col items-center max-w-4xl py-8 px-4 space-y-8">
        <section className="card animated-section bg-white p-8 rounded-lg shadow-xl transform opacity-100 translate-y-12 transition-transform ease-out duration-700">
          <h2 className="text-2xl text-blue-500 mb-4">About Us</h2>
          <hr />
          <p className="text-lg text-gray-700">
            We at Karat Karat Abhiyas provide financial assistance to underprivileged
            students preparing for government exams, covering coaching, travel, and exam
            fees. Our mission is to help every student who dreams of a brighter future but
            lacks the resources.
          </p>
          <img
            className="mt-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src="https://i.pinimg.com/736x/85/d1/e7/85d1e7d03b26c7d89edc08ea799c4695.jpg"
            alt="About Us Image"
          />
        </section>

        <section className="card animated-section bg-white p-8 rounded-lg shadow-xl transform opacity-100 translate-y-12 transition-transform ease-out duration-700">
          <h2 className="text-2xl text-blue-500 mb-4">Our Mission</h2>
          <hr />
          <p className="text-lg text-gray-700">
            Our aim is to support aspiring government job candidates by relieving them
            of financial barriers, so they can focus solely on their goals and achievements.
          </p>
          <img
            className="mt-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Add_a_subheading_1_.png?VersionId=MoNEvek00g1J_WpgxJkZkiQbvUs3SVU7"
            alt="Mission Image"
          />
        </section>

        <section className="card animated-section bg-white p-8 rounded-lg shadow-xl transform opacity-100 translate-y-12 transition-transform ease-out duration-700 mb-24">
          <h2 className="text-2xl text-blue-500 mb-4">How It Works</h2>
          <hr />
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            <li>Submit receipts for coaching and exam-related expenses.</li>
            <li>Receive reimbursements once you achieve your goals.</li>
            <li>Pay a minimal subscription fee to keep accessing resources.</li>
          </ul>
          <img
            className="mt-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src="https://th.bing.com/th?id=OIP.Zfucfk0wwNsmPPowq-tiNgHaD4&w=298&h=156&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.5&pid=MultiSMRSV2Source"
            alt="How It Works Image"
          />
        </section>
      </div>

      <footer className="bg-gray-900 text-white text-center py-4 w-full">
        <p>&copy; 2024 Karat Karat Abhiyas. All rights reserved.</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
