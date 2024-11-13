import React, { useEffect, useState } from 'react';
import "./About.css" 

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
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Karat Karat Abhiyas</h1>
          <p>Empowering government exam aspirants to achieve their dreams</p>
        </div>
      </header>

      <div className="container">
        <section className="about-section card animated-section">
          <h2>About Us</h2>
          <hr />
          <p>
            We at Karat Karat Abhiyas provide financial assistance to underprivileged
            students preparing for government exams, covering coaching, travel, and exam
            fees. Our mission is to help every student who dreams of a brighter future but
            lacks the resources.
          </p>
          <img
            src="https://i.pinimg.com/736x/85/d1/e7/85d1e7d03b26c7d89edc08ea799c4695.jpg"
            alt="About Us Image"
          />
        </section>

        <section className="mission-section card animated-section">
          <h2>Our Mission</h2>
          <hr />
          <p>
            Our aim is to support aspiring government job candidates by relieving them
            of financial barriers, so they can focus solely on their goals and achievements.
          </p>
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Add_a_subheading_1_.png?VersionId=MoNEvek00g1J_WpgxJkZkiQbvUs3SVU7"
            alt="Mission Image"
          />
        </section>

        <section className="benefits-section card animated-section">
          <h2>How It Works</h2>
          <hr />
          <ul>
            <li>Submit receipts for coaching and exam-related expenses.</li>
            <li>Receive reimbursements once you achieve your goals.</li>
            <li>Pay a minimal subscription fee to keep accessing resources.</li>
          </ul>
          <img
            src="https://th.bing.com/th?id=OIP.Zfucfk0wwNsmPPowq-tiNgHaD4&w=298&h=156&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.5&pid=MultiSMRSV2Source"
            alt="How It Works Image"
          />
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Karat Karat Abhiyas. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
