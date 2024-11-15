import React from 'react';


import SubscriptionCalculator from '../Component/SubscriptionCalculator';

const SubscriptionPlans = () => {
  return (
    <>
    
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Monthly Plan Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Monthly Subscription</h2>
            <p className="text-lg text-gray-600 mb-6">No discounts or coupons available</p>

            {/* Button positioned at the bottom */}
            <button onClick={() => window.location.href = '/FinalPayment'} className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-full mt-auto">
              Subscribe Now
            </button>
          </div>

          {/* Yearly Plan Card with Discount */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yearly Subscription</h2>
            <p className="text-lg text-gray-600 mb-4">Huge Discount Available!</p>
            <div className="text-4xl font-semibold text-gray-800 mb-6"></div>
            <div className="text-sm text-gray-500 mb-4">Save 20% with the yearly plan</div>

            {/* Button positioned at the bottom */}
            <button onClick={() => window.location.href = '/FinalPayment'} className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full mt-auto">
              Subscribe Now
            </button>
          </div>
        </div>
        
      </div>
     
    </>
  );
};

export default SubscriptionPlans;
