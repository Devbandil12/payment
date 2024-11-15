import React from 'react';
import './PendulamButton.css'; // Import CSS for Tailwind animations

const PendulumButton = () => {
  return (
   
 <div className=" flex justify-center items-center mt-6 bg-gray-100 p-6 rounded-lg">
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
        <button onClick={()=> window.location.href = '/Subscription'} className="pendulum-button bg-red-500 text-white font-bold py-3 px-6 w-40 mb-4 rounded-lg shadow-lg">
          20% Off
        </button>
      </div>
</div>


  );
};

export default PendulumButton;
